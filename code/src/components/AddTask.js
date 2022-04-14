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
      <form onSubmit={onFormSubmit}>
        <label>
          <Input
            className="input"
            type="text"
            placeholder="Add a to do..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />
          <SubmitButton className="submit-button" type="submit">
            +
          </SubmitButton>
        </label>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
`

const Input = styled.input`
  position: relative;
  all: unset;
  width: calc(100% - 20px);
  border: 4px solid black;
  /* margin: 10px auto; */
  padding: 7px;
  border-radius: unset;
  background-color: #cee9ed;
  font-size: 22px;
  ::placeholder {
    font-size: 16px;
    color: gray;
  }
`
const SubmitButton = styled.button`
  position: absolute;
  all: unset;
  width: calc(100% - 20px);
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  padding-right: 8px;
  cursor: pointer;
  color: #6b6462;

  .submit-button:focus {
    outline: none;
  }
`

export default AddTask
