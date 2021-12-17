import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
	display: flex;
	align-items: center,
	justify-content: space-evenly;
	text-align: center;
`;

const InputButton = styled.button``;

const AddTodo = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
	};

	return (
		<InputContainer>
			<input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<InputButton onClick={onAddTodo}>Add todo</InputButton>
		</InputContainer>
	);
};

export default AddTodo;
