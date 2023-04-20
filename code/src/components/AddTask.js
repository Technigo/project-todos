import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import styled from 'styled-components';
import todolist from 'reducers/todolist';
import TaskList from './TaskList';
import DeleteAllTasks from './DeleteAllTasks';
import { SubmitButton } from '../styles/Buttons';

const ToDoWrapper = styled.section`
z-index: 3;
margin: auto;
width: 470px;
padding: 10px;
background: rgba(255, 255, 255, 0.12);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(255, 255, 255, 0.22);

input[type=text] {
font-family: Quicksand;
outline: none;
color: white;
padding-left: 15px;
width: 300px;
height: 40px;
background: rgba(255, 255, 255, 0.08);
border-radius: 15px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.5px);
-webkit-backdrop-filter: blur(1.5px);
border: 1px solid rgba(255, 255, 255, 0.16);
 }`

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // this prevents the form from reloading
    const newTask = {
      id: uuid(),
      name: inputValue,
      time: moment().format('D MMM HH:mm'),
      isChecked: false
    }
    dispatch(todolist.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <ToDoWrapper>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <p>add new task:</p>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </label>
        <SubmitButton type="submit">add</SubmitButton>
      </form>
      <TaskList />
      <DeleteAllTasks />
    </ToDoWrapper>
  )
}

export default AddTask;