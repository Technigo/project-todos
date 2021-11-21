import React from "react";
import styled from "styled-components";

// Importing components
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

const Main = styled.main`
	margin: 20px;

	@media (min-width: 700px) {
		margin: 30px 15vw;
	}

	@media (min-width: 1025px) {
		margin: 30px 20vw;
	}
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
