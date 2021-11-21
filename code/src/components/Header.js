import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import styled from "styled-components";

import { Counter } from "./Counter";
import { CompleteButton } from "./CompleteButton";

const HeaderSection = styled.header`
	background-color: #60c57f;
	padding: 30px 20px;
	color: #ffffff;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Heading = styled.h1`
	font-size: 26px;
	margin-bottom: 5px;
`;

export const Header = () => {
	const items = useSelector((store) => store.todos.items);
	const dispatch = useDispatch();

	const onCompleteAllTodos = (items) => {
		dispatch(todos.actions.completeAllTodos(items));
	};

	return (
		<HeaderSection>
			<FlexContainer>
				<Heading>To do list</Heading>
				<CompleteButton onClick={onCompleteAllTodos}>
					Complete all
				</CompleteButton>
			</FlexContainer>
			<Counter />
		</HeaderSection>
	);
};
