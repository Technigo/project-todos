import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
	display: flex;
	align-items: center,
	justify-content: flex-end;
	text-align: center;
	gap: 5px;
`;

const InputButton = styled.button`
	font-family: "Saira Condensed", sans-serif;
	color: ;
	background-color: #e6ceff;
	border-radius: 5px;
	border: none;
	box-shadow: 1px 1px 3px #4d2c91;
	padding: 5px;
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
				placeholder="Write something..."
				value={input}
				required
				size="50"
				onChange={(event) => setInput(event.target.value)}
			/>
			<InputButton onClick={onAddTodo} disabled={input.length < 1}>
				Add to-to
			</InputButton>
		</InputContainer>
	);
};

export default AddTodo;
