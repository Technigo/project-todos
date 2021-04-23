import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import styled from 'styled-components';

import tasks from '../reducers/tasks';



const Form = styled.form`
width: 100%;
padding: 20px 0;
margin: 10px 0;
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: white;
border-radius: 15px;
box-shadow: 0  0 10px #aaaaaa;
`

const TaskCreator = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addNewTask(newTask));
    setValue("");
  };

  const newTask = {
    id:uniqid(), 
    title: value, 
    createdAt: new Date().toISOString(), 
    isComplete: false}

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
  return (
    <Form onSubmit={onFormSubmit}>
      <input
        type="text"
        id="taskInput"
        value={value}
        onChange={handleChange}
        placeholder="+ Add task"
      />
      <button type="submit">Add</button>
    </Form>

  )
};

export default TaskCreator;

//add ARIA-tag to inputform since no label?
//action dispatched from here when new task is added!
