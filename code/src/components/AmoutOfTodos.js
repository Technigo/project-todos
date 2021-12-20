import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AmountsText = styled.h1`
	display: flex;
	text-shadow: 1px 0.5px 2px #4d2c91;
`;

export const AmountOfTodos = () => {
	const amount = useSelector((store) => {
		return store.todos.items.filter((todo) => !todo.isComplete).length;
	});

	return <AmountsText>You have {amount} to-dos left</AmountsText>;
};
