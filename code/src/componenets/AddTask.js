/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/task';
import styled from 'styled-components';
import TaskList from './TaskList';
/* import styled from 'styled-components/macro'; */

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
background-color: lightyellow;
  opacity: 0.9;
  padding: 20px;
  border-radius: 20px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`

`
const Form = styled.form`
    text-align: center;
    height: 80px;  
`

const Label = styled.label`
    display: inline-block;
    margin-right: 10px;
    width: 275px;
    border: none;
    border-bottom: 2px solid black;
    `