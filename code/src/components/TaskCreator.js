import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import tasks from '../reducers/tasks';



const Form = styled.form`
width: 250px;
border: 2px solid blue;
margin: 10px;
padding: 20px 0;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const TaskCreator = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addNewTask(newTask));
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        id="taskInput"
        value={newTask}
        onChange={handleChange}
        placeholder="+ Add task"
      />
      <button type="submit" onClick={handleSubmit}>Add</button>
    </Form>

  )
};

export default TaskCreator;

//add ARIA-tag to inputform since no label?
//action dispatched from here when new task is added!
