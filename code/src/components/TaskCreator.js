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
const Input = styled.input`
width: 200px;
height: 30px;
border-radius: 5px;
background-color: #eee;
border: none;
font-size: 16px;
&::placeholder{
  font-size: 16px;
}`

const Button = styled.button`
width: 25px; 
height: 25px;
border-radius: 50%;
background-color: #2f5d62;
position: relative;
border: none;
&:hover { background-color: #6c9fa3;
cursor: pointer;}
&:active { background-color: #ffb037;}
&:disabled {opacity: 0.6;
cursor: not-allowed;}
`
const Image = styled.img`
width: 25px;
position: absolute;
top: 0;
left: 0;
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
      <Input
        type="text"
        id="taskInput"
        value={value}
        onChange={handleChange}
        placeholder="Write to do here"
      />
      <Button type="submit"disabled={!value}><Image src="./assets/plus.png" alt="Add"/></Button>
    </Form>

  )
};

export default TaskCreator;

//add ARIA-tag to inputform since no label?
//action dispatched from here when new task is added!
