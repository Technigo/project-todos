import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { NewTask } from 'components/NewTask';
import { TaskList } from 'components/TaskList';
import { todoStore } from 'reducers/todoStore';
import { size } from 'reducers/sizes';
import { Home } from 'components/Home';

const reducer = combineReducers({
	todoStore: todoStore.reducer,
	size: size.reducer
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
};
