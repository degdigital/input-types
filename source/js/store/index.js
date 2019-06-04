import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.js';

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(
			thunkMiddleware
		)
	);
}