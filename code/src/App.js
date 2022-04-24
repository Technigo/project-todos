import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';

import tasks from 'reducers/tasks';
import TaskList from 'components/TaskList';

const enhancer = compose(persistState());

const reducer = combineReducers({
	tasks: tasks.reducer,
});

const store = createStore(reducer, enhancer);

export const App = () => {
	return (
		<Provider store={store}>
			<TaskList />
		</Provider>
	);
};
