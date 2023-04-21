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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 460px;
padding-top: 40px;
background: rgba(255, 255, 255, 0.12);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(255, 255, 255, 0.22);

input[type=text] {
  display: flex;
font-family: Quicksand;
outline: none;
color: white;
padding-left: 15px;
width: 200px;
height: 40px;
background: rgba(255, 255, 255, 0.08);
border-radius: 15px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.5px);
-webkit-backdrop-filter: blur(1.5px);
border: 1px solid rgba(255, 255, 255, 0.16);
::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    font-style: italic;
  }
 }`

const AddTaskDiv = styled.div`
 border: 1px solid black;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 width: 600px;
 height: 100px;
 gap: 20px;`

const AddButtonPlus = styled.div`
font-size: 30px;
font-weight: 200;
line-height: 15px;
`

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
      <AddTaskDiv>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="buy eggs"
              id="addTaskInput"
              type="text" />
          </label>
          <SubmitButton type="submit"><AddButtonPlus>+</AddButtonPlus></SubmitButton>
        </form>
      </AddTaskDiv>
      <TaskList />
      <DeleteAllTasks />
    </ToDoWrapper>
  )
}

export default AddTask;