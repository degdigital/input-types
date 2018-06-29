import {
	ADD_INPUT_ITEM,
	EDIT_INPUT_ITEM,
	REMOVE_INPUT_ITEM,
	REQUEST_SAVED_STATE,
	RECEIVE_SAVED_STATE,
	SAVE_STATE_PENDING,
	SAVE_STATE_COMPLETE
} from '../constants/action-types';
import {generateRandomId} from 'utils/utils.js';

const defaultInputItem = {
	name: 'Input Item',
	inputType: 'text',
	isRequired: false
};

const initialState = {
	inputItems: [
		{
			...defaultInputItem,
			id: generateRandomId()
		}
	]
};

const filterEditInputItems = (inputItems, payload) => {
	return inputItems.map(inputItem => {
		if (inputItem.id === payload.id) {
			return Object.assign({}, inputItem, payload);
		} else {
			return inputItem;
		}
	});
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_INPUT_ITEM:
			return {
				...state,
				inputItems: [
					{
						...defaultInputItem,
						id: generateRandomId()
					},
					...state.inputItems
				]
			};
		case EDIT_INPUT_ITEM:
			return {
				...state,
				inputItems: filterEditInputItems(state.inputItems, action.payload)
			};
		case REMOVE_INPUT_ITEM:
			return {
				...state,
				inputItems: state.inputItems.filter(inputItem => inputItem.id !== action.payload.id)
			}
		case REQUEST_SAVED_STATE:
			return {
				...state,
				inputItems: [],
				isFetching: true,
				isLoading: true
			}
		case RECEIVE_SAVED_STATE:
			return {
				...state,
				inputItems: action.payload,
				isFetching: false,
				isLoading: false
			}
		case SAVE_STATE_PENDING:
			return {
				...state,
				isFetching: true,
				saveSuccessful: false
			}
		case SAVE_STATE_COMPLETE:
			return {
				...state,
				isFetching: false,
				saveSuccessful: true
			}
		default:
			return state;
	}
};

export default rootReducer;