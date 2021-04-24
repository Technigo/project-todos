import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import todos from '../reducers/todos'


const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  margin: 10px 20px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 10px 10px 30px #bcbdbe;
 `

const Input = styled.input`
  width: 180px;
  padding: 5px;
  border: 1px solid 114e60;
  @media (min-width: 668px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 400px;
  }
`

const SubmitButton = styled.button`
  width: 50px;
  padding: 7px;
  background-color: #114e60;
  color: #f4eee8;
  border: none;

  &:hover {
    background-color: #19718b;
  }
`

const AddTodo = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    // Define newTask as an object – not done, and with "description" as the payload (what's being sent in to the function).
    const newTask = {
      id: uuidv4(),
      description: value,
      isComplete: false,
      createdAt: new Date().toJSON()
    }

    dispatch(todos.actions.addTask(newTask))
    setValue('') // Clear the input field when entering
  }

  return (
    <Form autocomplete='off'>
      <Input 
        placeholder='Enter new task'
        id='check'
        type='text'
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autocomplete='off'
      />
      <SubmitButton
        type='submit'
        onClick={onFormSubmit}
        disabled={value < 2}
      >
        ADD
      </SubmitButton>
    </Form>
  )
}

export default AddTodo 