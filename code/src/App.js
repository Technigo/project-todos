import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const TodoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	min-height: 85vh;
	height: 85%;
	margin: 5vh;
	background-color: #b39ddb;
	padding-bottom: 5vh;
	max-width: 90vw;
`;

const reducer = combineReducers({
	todos: todos.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<TodoContainer>
				<TodoList />
				<AddTodo />
			</TodoContainer>
		</Provider>
	);
};
