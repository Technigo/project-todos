/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import uniqid from 'uniqid';
import styled from 'styled-components';

import { Button } from 'StyledComponents/globalStyles';
import Counter from './Counter';

const AddTask = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      name: value,
      isDone: false
    }

    dispatch(tasks.actions.addItem(newTask))

    setValue('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <MainTextArea
        placeholder="Start here! Add a new task...or wish"
        rows="5"
        cols="40"
        value={value}
        onChange={(event) => setValue(event.target.value)} />
      <ToDoDetails>
        <Counter />
        <Button type="submit"> Click! </Button>
      </ToDoDetails>
    </Form>
  )
}

export default AddTask;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 20%;
    align-items: center;
`
const MainTextArea = styled.textarea`
    border: none;
    resize: none;
    font-family: 'Cormorant Garamond', serif;
    width: 90%;
    padding: 20px;
    background-color: var(--quinary);
    font-size: 18px;
    box-shadow: 0px 10px 7px -6px rgba(64,29,2,0.43);
    
    ::placeholder{
        font-size: 12px;
    }
    @media (min-width: 600px) and (max-width: 900px){
  padding: 20px 20px 50px;
  font-size: 20px;
  
  ::placeholder{
    font-size: 16px;
  }
}

@media (min-width: 901px){
  padding: 20px 20px 80px;
  width: 85%;
  font-size:28px;
  ::placeholder{
  font-size: 25px;
  }
}
`

export const ToDoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin: 10px auto;
  justify-content: space-between;
@media (min-width: 600px) and (max-width: 900px){
  margin: 20px auto;
}
@media (min-width: 901px){
  margin: 30px auto;
}
`
