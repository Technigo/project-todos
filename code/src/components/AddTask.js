import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const AddTask = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(tasks.actions.addTask(newTask))
    setValue('')
  }

  return (
    <FormContainer>
      <Input
        onSubmit={onFormSubmit}
        className="input"
        type="text"
        // placeholder="Add a to do..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      <SubmitButton className="submit-button" type="submit">
        +
      </SubmitButton>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

const Input = styled.input`
  position: relative;
  all: unset;
  width: calc(100% - 20px);
  border: 4px solid black;
  padding: 7px;
  border-radius: unset;
  background-color: #cee9ed;
  font-size: 22px;
  z-index: -9;
  ::placeholder {
    font-size: 16px;
    color: gray;
  }
`
const SubmitButton = styled.button`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  all: unset;
  width: calc(100% - 20px);
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  padding-right: 8px;
  cursor: pointer;
  color: black;
  z-index: 7;
  position: right;

  .submit-button:focus {
    outline: none;
  }
`

export default AddTask
