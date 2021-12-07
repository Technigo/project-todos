import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import todos from '../reducers/todos'; //slice imported


//styled components
const AddTodoContainer = styled.section`
	text-align: center;
`;

const AddTodoButton = styled.button`
background-color: #1CB5E0;
margin: 20px 0 0 20px;
border:none;
border-radius: 8px 0 8px 0;
height: 40px;
width: 101px;
font-weight: 700;
font-size:18px;
color: black;
box-shadow: 3px 3px #000046;
font-family: 'Gaegu', cursive;
padding:0;
`;

const Input = styled.input`
max-width: 58%;
border: none;
margin: 20px auto;
padding: 7px;
border-radius: unset;
background-color: transparent;
border-bottom: 2px solid #000046;
font-size: 22px;
font-family: 'Architects Daughter', cursive;
::placeholder {
  font-size: 16px;
  color: #cccccc;
}
`;


//code
const AddTodo = () => { //pass anonymus function
  const [input, setInput] = useState(''); //our state property. We use setInput function in order to update the State.

  const dispatch = useDispatch(); //Dispatch is a function of the Redux store. We call store. Dispatch to dispatch an action.

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
        placeholder="Add a jaw-some todo here"
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTodoButton onClick={onAddTodo}>Add todo <FontAwesomeIcon icon={faPlusSquare} /></AddTodoButton>
    </AddTodoContainer>
  );
};

export default AddTodo;
