/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

export const Divider = styled.hr`
  border: none;
  color: var(--color);
  height: 1px;
  background-color: var(--color);
  width: 100%;`

const TaskInput = styled.input`
    font-size: inherit;
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid var(--input-border);
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    line-height: 1;
    height: 2.25rem;
    display: block;
    max-width: 70%;
    margin: 1em 0;
    &:focus {
      border-color: var(--color);
      box-shadow: 0 0 0 2px var(--color);
      outline: 2px solid transparent; /* for Windows High Contrast mode */
    };
    ::placeholder {
      color: #767676;
      opacity: 1;
    `

const InputLabel = styled.label`
margin: 0;
font-size: 21px;
font-size: max(21px, 1em);
`

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      task: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <InputLabel htmlFor="textInput">Add a new task here:
          <TaskInput
            autoComplete="off"
            inputMode="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="textInput"
            name="newTask"
            type="text"
            placeholder="Press Enter to add"
            required />
        </InputLabel>
      </form>
      <Divider />
    </>
  )
};

export default AddTodo;