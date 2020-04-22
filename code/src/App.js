import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todoStore } from 'reducers/todoStore';
import { size } from 'reducers/sizes';
import { Home } from 'components/Home';

const reducer = combineReducers({
	todoStore: todoStore.reducer,
	size: size.reducer
});
// Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = configureStore({ reducer }, persistedState);

export const App = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
};
