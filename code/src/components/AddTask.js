/* eslint-disable linebreak-style */
/* eslint-disable max-len */
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
  const [dueDate, setDueDate] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    // Check if the textarea is empty
    if (!value.trim()) {
      return;
    }

    const newTask = {
      id: uniqid(),
      name: value,
      dueDate, // add the due date to the new task object
      isDone: false
    }

    dispatch(tasks.actions.addItem(newTask))

    setValue('')
    setDueDate('')
  }

  return (
    <>
      <Quote>“A goal without a plan is just a wish.”</Quote>
      <NonItalic>― Antoine de Saint-Exupéry</NonItalic>
      <Form onSubmit={onFormSubmit}>
        <MainTextArea
          placeholder="Start here! Add a new task or appointment :)"
          rows="2"
          cols="30"
          value={value}
          onChange={(event) => setValue(event.target.value)} />
        <ToDoDetails>
          <DateInput
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)} />
          {/* update the due date state on change */}
          <Counter />
          <Button type="submit">
            <img
              className="add-button"
              src="/assets/plus.svg"
              alt="add to-do" />
          </Button>
        </ToDoDetails>
      </Form>
    </>
  )
}

export default AddTask;

const Quote = styled.h2`
font-size: 16px;
color: white;
text-align: center;
font-weight: lighter;
font-style: italic;
padding: 10px;

@media (min-width: 600px) and (max-width: 900px){
  font-size: 18px;
}
@media (min-width: 901px){
  font-size: 20px;
}
`
const NonItalic = styled(Quote)`
  font-style: normal;
  font-size: 14px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 10%;
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
        font-size: 15px;
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
const DateInput = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 5px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 10px;
  background-color: #fff;
  /* Remove the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 900px){
  
}

  @media (min-width: 901px){

}
`

export const ToDoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 92%;
  margin: 10px auto;
  justify-content: space-between;
@media (min-width: 600px) and (max-width: 900px){
  margin: 20px auto;
}
@media (min-width: 901px){
  margin: 30px auto;
  width: 85%
}
`