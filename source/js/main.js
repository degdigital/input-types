import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'store/index';
import App from 'components/app.js';

const rootEl = document.getElementById('app');
const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootEl
);