import React from "react";
import { useSelector } from "react-redux";

import todos from "../reducers/todos";

export const AmountOfTodos = () => {
	const amount = useSelector((store) => store.todos.length);

	return <h1>You have {amount} todos</h1>;
};
