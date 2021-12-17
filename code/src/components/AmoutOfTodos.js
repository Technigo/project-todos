import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AmountsText = styled.h1`
	display: flex;
`;

export const AmountOfTodos = () => {
	const amount = useSelector((store) => {
		return store.todos.items.filter((todo) => !todo.isComplete).length;
	});

	return <AmountsText>You have {amount} todos</AmountsText>;
};
