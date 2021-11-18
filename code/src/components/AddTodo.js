import React, { useState} from 'react';
import styled from "styled-components";
// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const AddTodoContainer = styled.section`
	text-align: center;
	margin: 30px auto;

`; 

const Input = styled.input`
	border: none;
	padding: 7px;
	background-color: transparent;
	border-bottom: 2px solid rgb(170, 170, 170);
	font-size: 20px;

	::placeholder {
		font-family: "Roboto",-apple-system;
	}
`;

const AddButton = styled.button`
	background-color: green;
	border:none;
	border-radius: 5px;
	height: 40px;
	width: 50px;

	font-size:20px;
	color:white;

	i:hover {
		width: 26px;
  		transform: scale(1.09);
	}
`;

const AddTodo = () => {

	const [input, setInput] = useState('');

	const dispatch = useDispatch();

	const onAddTodo = () => {
		// callinling action addTodo from the reducer
		dispatch(todos.actions.addTodo(input));
		// setting input field to an empty string
		setInput("");
	};

	return (
		<AddTodoContainer>
			<Input 
				type="text" 
				placeholder="Add todo here..."
				value={input} 
				onChange={(event) => setInput(event.target.value)} />
			<AddButton onClick={onAddTodo} disabled={input === ""}>
				<i className="fas fa-plus"></i>
			</AddButton>
		</AddTodoContainer>
	)
};

export default AddTodo;