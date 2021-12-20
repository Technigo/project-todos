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
	padding: 10px;
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
		setInput("");
	};

	return (
		<InputContainer>
			<Input
				type="text"
				placeholder="Write something..."
				value={input}
				required
				onChange={(event) => setInput(event.target.value)}
			/>
			<InputButton onClick={onAddTodo} disabled={!input}>
				Add to-to
			</InputButton>
		</InputContainer>
	);
};

export default AddTodo;
