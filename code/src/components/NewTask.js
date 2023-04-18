/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { tasks } from './reducers/tasks';
import { AddButton } from './styles/global';

const AddTask = styled.input`
    border: none;
    border-bottom: solid black 2px;

    &:focus {
        outline: none;
    }
`

export const NewTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onTaskSubmit = (event) => {
    event.preventDefault();
    const addTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    }
    dispatch(tasks.actions.addTask(addTask));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="addTaskInput">
                Add task
          <AddTask value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <AddButton type="submit">
          <span className="material-symbols-outlined">
add_circle
          </span>
        </AddButton>
      </form>
    </section>
  )
}