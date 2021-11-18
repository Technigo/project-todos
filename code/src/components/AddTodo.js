import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

import todos from '../reducers/todos'; //slice imported


//styled components
const AddTodoContainer = styled.section`
	text-align: center;
`; 

const AddTodoButton = styled.button`
background-color: #ee9ca7;
margin: 20px 0 0 20px;
border:none;
border-radius: 8px 0 8px 0;
height: 40px;
width: 99px;
font-weight: 600;
font-size:18px;
color: black;
box-shadow: 3px 3px #ffdde1;
font-family: 'Comic Neue', cursive;
`;

const Input = styled.input`
border: none;
margin: 20px auto;
padding: 7px;
background-color: transparent;
border-bottom: 2px solid #ffdde1;
font-size: 22px;
font-family: 'Comic Neue', cursive;
::placeholder {
	font-size: 14px;
    color: rgb(100,100,100);
	font-family: 'Comic Neue', cursive;
  }
`;



//code
const AddTodo = () => { //pass anonymus function
	const [input, setInput] = useState(''); //our state property. We use setInput function in order to update the State.


	const dispatch = useDispatch(); //

	const onAddTodo = () => { //function for add a to do
		dispatch(todos.actions.addTodo(input)); //here we dispatch our action

		// setting input field to an empty string
		setInput("");
	};



	return (
		<AddTodoContainer>
			<Input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<AddTodoButton onClick={onAddTodo}>Add todo</AddTodoButton> 
		</AddTodoContainer>
	);
};

export default AddTodo;
