import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';


//styling text input container
const AddContainer = styled.div`
  	display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    margin-top: 50px;
  `;
  
  //button to add input text from to list
	const AddButton = styled.button `
    margin-right:20px;
    width: 15%;
    border: none;
    border-radius: 10px;
    justify-content: flex-end;
    background: red;
    color: white;
    font-weight: 700;
    margin-left: 10px;
`; 
  
const TaskInput = styled.input`
border: 1px solid black;
width: 50%;
font-size: 15px;
margin-left: 50px;
margin-right: 15px;   
`; 

  const AddTodo = () => {
  const [input, setInput] = useState ('');

  const dispatch = useDispatch();


   //function to invoke the reducer to add a todo
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input)); setInput('');
     // the setInput('') clears the input field when button is clicked
 
  };
  return (
		<AddContainer>
		<TaskInput
			type="text"
      placeholder = "Add new task"
			value={input}
			onChange={(event) => setInput(event.target.value)}
			/>
			<AddButton onClick= {onAddTodo}> 
      Add your todo
			 </AddButton>
		  </AddContainer>
	);
};
export default AddTodo;
  




  

