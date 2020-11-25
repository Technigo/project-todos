import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { HabitTracker } from './components/HabitTracker';
import { todos } from './reducers/todos';

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<HabitTracker />
		</Provider>
	);
};
