import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { todoStore } from 'reducers/todoStore';
import { Home } from 'components/Home';

const reducer = combineReducers({
	todoStore: todoStore.reducer
});
// Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(reducer, persistedState);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
};
