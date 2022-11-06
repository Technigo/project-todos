import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo';

const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
