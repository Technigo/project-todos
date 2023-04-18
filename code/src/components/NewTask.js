/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import moment from 'moment';
import { tasks } from './reducers/tasks';
import { AddButton, HeadLine } from './styles/global';

const AddTask = styled.input`
    border: none;
    border-bottom: solid black 1px;
    width: 200px;
    margin-left: 20px;
    font-size: 2em;
    font-family: 'Dongle', sans-serif;
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
      complete: false,
      time: moment().format('D MMM HH:mm')
    }
    dispatch(tasks.actions.addTask(addTask));
    setInputValue('');
  }
  return (
    <section>
      <HeadLine>To Do</HeadLine>
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="addTaskInput">
          <AddTask
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Add task" />
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