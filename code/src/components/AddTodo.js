import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
	display: flex;
	align-items: center,
	justify-content: flex-end;
	text-align: center;
`;

const InputButton = styled.button`
	font-family: "Saira Condensed", sans-serif;
	color: ;
	background-color: #e6ceff;
	border-radius: 5px;
	border: ;
	text-shadow: 0.2px 0.2px 2px #4d2c91;
`;

const Input = styled.input`
	font-family: "Saira Condensed", sans-serif;
	background-color: #e6ceff;
	border-radius: 5px;
	border: none;
	outline: none;
`;

const AddTodo = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
	};

	return (
		<InputContainer>
			<Input
				type="text"
				placeholder="Add your to-do"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<InputButton onClick={onAddTodo}>Add to-to</InputButton>
		</InputContainer>
	);
};

export default AddTodo;
