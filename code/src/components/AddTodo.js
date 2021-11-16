import React, { useState} from 'react';

// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';
import styled from "styled-components";

const AddTodoContainer = styled.section`
	padding:10px 0;
	text-align: center;
`; 

const Input = styled.input`
	border: none;
	border-bottom: 2px solid black;
	margin-right: 10px;
	font-size: 16px;

	::placeholder {
		font-family: "Montserrat"
	}
`



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
				placeholder="Add todo here"
				value={input} 
				onChange={(event) => setInput(event.target.value)} />
			<button onClick={onAddTodo} disabled={input === ""}>
				<i className="fas fa-plus"></i>
			</button>
		</AddTodoContainer>
	)
};

export default AddTodo;