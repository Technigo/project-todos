import React from "react";
import { useSelector } from "react-redux";

export const AmountOfTodos = () => {
	const amount = useSelector((store) => store.todos.length);

	return <h1>You have {amount} todos</h1>;
};
