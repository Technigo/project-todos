import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import task from 'reducers/task';
import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask';

const reducer = combineReducers({
	task: task.reducer,
});

const TaskContainer = styled.section`
	width: 80%;
	margin: 20px auto;
	padding: 20px;
	font-size: 18px;
	font-weight: bold;
	color: #003b49;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 25px;

	@media (min-width: 768px) {
		width: 65%;
	}
`;

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<AddTask />
			<TaskContainer>
				<TaskList />
			</TaskContainer>
		</Provider>
	);
};
