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
margin: 100px auto;
padding: 10px;
font-size: 18px;
font-weight: bold;
border: 2px solid black;
`


const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<TaskContainer>
				<AddTask />
				<TaskList />
			</TaskContainer>
		</Provider>
	);
};
