import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import styled from "styled-components";

const AddTodoSection = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	left: 1rem;
`;

const TextInput = styled.input`
	height: 45px;
	grid-column: span 4;
	padding: 10px;
	font-size: 16px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border: 1px solid #e0e0e0;
	border-right: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font-family: "Montserrat", sans-serif;
	::placeholder {
		color: #b0b0b0;
	}
`;

const AddTaskButton = styled.button`
	height: 45px;
	border: none;
	background-color: #60c57f;
	font-weight: 600;
	color: #ffffff;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	grid-column: span 1;
`;

export const AddTodo = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
		setInput(""); // Clears textinput
	};

	// onAddTodo function is invoked on Enter-key
	const onEnter = (event) => {
		if (event.key === "Enter") {
			onAddTodo();
		}
	};

	return (
		<AddTodoSection>
			<TextInput
				type="text"
				value={input}
				placeholder="Add a new task"
				onKeyDown={(event) => onEnter(event)}
				onChange={(event) => setInput(event.target.value)}
			/>
			<AddTaskButton onClick={onAddTodo}>Add</AddTaskButton>
		</AddTodoSection>
	);
};
