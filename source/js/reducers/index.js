import {ADD_INPUT_ITEM, EDIT_INPUT_ITEM, REMOVE_INPUT_ITEM} from '../constants/action-types';
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
		default:
			return state;
	}
};

export default rootReducer;