import {
    ADD_INPUT_ITEM,
    EDIT_INPUT_ITEM,
    REMOVE_INPUT_ITEM,
    REQUEST_SAVED_STATE,
    RECEIVE_SAVED_STATE
} from '../constants/action-types';

const formatSavedStateObject = savedStateObject =>
    Object.keys(savedStateObject).map(key => ({
        ...savedStateObject[key],
        id: key
    }));

export const addInputItem = () => ({
    type: ADD_INPUT_ITEM
});

export const editInputItem = payload => ({
    type: EDIT_INPUT_ITEM,
    payload
});

export const removeInputItem = id => ({
    type: REMOVE_INPUT_ITEM,
    payload: {
        id
    }
});

export const requestSavedState = id => ({
    type: REQUEST_SAVED_STATE,
    id
});

export const receiveSavedState = payload => ({
    type: RECEIVE_SAVED_STATE,
    payload
});

export const fetchSavedState = id => dispatch => {
    dispatch(requestSavedState(id));
    return fetch(`/api/state?key=${id}`)
        .then(response => response.json())
        .then(json => {
            if (json) {
                dispatch(receiveSavedState(formatSavedStateObject(json)));
            } else {
                dispatch(addInputItem());
            }
        });
};

export const saveSavedStates = () => {

};