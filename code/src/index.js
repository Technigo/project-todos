import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
