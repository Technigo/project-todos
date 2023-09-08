/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

const Divider = styled.hr`
  border: none;
  color: var(--color);
  height: 1px;
  background-color: var(--color);
  width: 100%;`

const TaskInput = styled.input`
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid var(--input-border);
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    line-height: 1;
    height: 2.25rem;
    display: block;
    margin: 2rem 0;
    max-width: 70%;
    &:focus {
      border-color: var(--color);
      box-shadow: 0 0 0 2px var(--color);
      outline: 2px solid transparent; /* for Windows High Contrast mode */
    };
    ::placeholder {
      color: #767676;
      opacity: 1;
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
      <Divider />
      <form onSubmit={onFormSubmit}>
        <label htmlFor="textInput">Add a new task here:
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
        </label>
      </form>
      <Divider />
    </>
  )
};

export default AddTodo;