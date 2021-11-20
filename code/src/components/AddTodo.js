import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import styled from "styled-components";

const AddTodoSection = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
`;

const TextInput = styled.input`
	height: 40px;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	border: 1px solid #e0e0e0;
	border-right: none;
	box-sizing: border-box;
	grid-column: span 4;
	font-size: 16px;
	padding: 10px;
`;

const AddTaskButton = styled.button`
	height: 40px;
	border: none;
	background-color: #60c57f;
	font-size: 16px;
	font-weight: 600;
	color: #ffffff;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	grid-column: span 2;
`;

export const AddTodo = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
	};

	return (
		<AddTodoSection>
			<TextInput
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<AddTaskButton onClick={onAddTodo}>Add task</AddTaskButton>
		</AddTodoSection>
	);
};
