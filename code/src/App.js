import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const TodoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	min-height: 70vh;
	height: 70%;
	margin: 5vh;
	background-color: #b39ddb;
	padding-bottom: 5vh;
	width: 80%;
	border-radius: 5px;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

const reducer = combineReducers({
	todos: todos.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Wrapper>
				<TodoContainer>
					<TodoList />
					<AddTodo />
				</TodoContainer>
			</Wrapper>
		</Provider>
	);
};
