import {
    ADD_INPUT_ITEM,
    EDIT_INPUT_ITEM,
    REMOVE_INPUT_ITEM,
    REQUEST_SAVED_STATE,
    RECEIVE_SAVED_STATE,
    SAVE_STATE,
    SAVE_STATE_PENDING,
    SAVE_STATE_COMPLETE
} from '../constants/action-types';

const endpoint = '/api/state';

const updateUrl = id => history.replaceState(null, null, id);

const formatFirebaseObjectForState = savedStateObject =>
    Object.keys(savedStateObject).map(key => ({
        ...savedStateObject[key],
        id: key
    }));

const formatStateArrayForFirebase = stateArray => {
    let firebaseObject = {};
    stateArray.forEach(stateObject => {
        const stateObjectCopy = {...stateObject};
        const id = stateObject.id;
        delete stateObjectCopy.id;
        delete stateObjectCopy.isValid;
        firebaseObject[id] = stateObjectCopy;
    });
    return firebaseObject;
};

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
    return fetch(`${endpoint}?key=${id}`)
        .then(response => response.json())
        .then(json => {
            if (json) {
                dispatch(receiveSavedState(formatFirebaseObjectForState(json)));
            } else {
                dispatch(addInputItem());
            }
        })
        .catch(() => dispatch(addInputItem()));
};

export const saveState = inputItems => dispatch => {
    dispatch(saveStatePending());
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formatStateArrayForFirebase(inputItems))
    })
        .then(response => response.json())
        .then(json => {
            if (json) {
                updateUrl(json.id);
                dispatch(saveStateComplete(json));
            }
        })
        .catch(error => dispatch(saveStateComplete(error)));
};

export const saveStatePending = () => ({
    type: SAVE_STATE_PENDING
});

export const saveStateComplete = payload => {
        return {
        type: SAVE_STATE_COMPLETE
    };
};