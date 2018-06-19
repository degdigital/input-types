import {ADD_INPUT_ITEM, EDIT_INPUT_ITEM, REMOVE_INPUT_ITEM} from '../constants/action-types';

export const addInputItem = () => ({
	type: ADD_INPUT_ITEM
});

export const editInputItem = (payload) => {
	return ({
		type: EDIT_INPUT_ITEM,
		payload
	});
};

export const removeInputItem = (id) => ({
	type: REMOVE_INPUT_ITEM,
	payload: {
		id
	}
});