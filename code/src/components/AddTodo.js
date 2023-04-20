import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'
import styled from 'styled-components'

import todos from 'reducers/todo';
import { StyleP } from './Header';

const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      name: inputText,
      isDone: false
    }
    dispatch(todos.actions.addTask(newTodo));
    setInputText('');
  };

  return (
    <TodoForm onSubmit={onAddTodo}>
      <label htmlFor="text">
        <StyleP>Create new</StyleP>
        <input
          type="text"
          value={inputText}
          required
          onChange={(event) => setInputText(event.target.value)} />
      </label>
      <SubmitButton type="text">ADD NEW</SubmitButton>
    </TodoForm>
  );
};

export const TodoForm = styled.form`
margin: 2px;
display: flex;
justify-content: flex-start;

input[type=text] {
      background: white;
      outline: none;
      font-family: 'Gagau';
      font-weight: bold;
      font-size: 16px;
      outline: 1px solid #aaa;
      border-radius: 6px;
      margin-left: 5%;
}

@media screen and (min-width: 768px) {
  justify-content: flex-start;
}
`
const SubmitButton = styled.button`
border: none;
border-radius: 60px;
cursor: pointer;
font-weight: bold;
background-color: #c7cf93;
font-family: 'Gagau';
width: 80px;
height: 30px;
margin-left: -30px;
/* outline: 1px solid #aaa; */

&:hover {
  box-shadow: 1px 2px rgba(33,33,33,.2); 
}
`
export default AddTodo;