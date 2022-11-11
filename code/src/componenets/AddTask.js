/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/task';
import styled from 'styled-components/macro';
import TaskList from './TaskList';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isDone: false }
    dispatch(tasks.actions.addItem(newTask))
    setInputValue('');
    localStorage.setItem('taskList', JSON.stringify(TaskList))
  }

  return (
    <AddWrapper>
      <Form onSubmit={onFormSubmit}>
        <Label>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Anything else todo?" />
        </Label>
        <Button
          disabled={inputValue === ''}>✖️
        </Button>
      </Form>
    </AddWrapper>
  )
}

export default AddTask;

const AddWrapper = styled.div`
  padding: 20px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 4px solid blue; */
`
const Form = styled.form`
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center; 
    /* border: 3px solid #F63F41; */
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    width: 90%;
    border-bottom: 2px solid black;
    `
const Button = styled.button`
padding: 15px;
width: 50px;
border-radius: 50%;
color: black;
border: 3px solid rgb(168, 187, 168);
justify-item: center;
`