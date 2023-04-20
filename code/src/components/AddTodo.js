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
      background: transparent;
      outline: none;
      font-family: 'Gagau';
      font-weight: bold;
      font-size: 12px;
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
border-radius: 5px;
cursor: pointer;
font-weight: bold;
background-color: #c7cf93;
font-family: 'Gagau';
outline: 1px solid #aaa;

&:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
`
export default AddTodo;