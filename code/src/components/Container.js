import React from "react";
import styled from "styled-components";

// Importing components
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

const Main = styled.main`
	margin: 20px;
`;

export const Container = () => {
	return (
		<>
			<Header />
			<Main>
				<TodoList />
				<AddTodo />
			</Main>
		</>
	);
};
