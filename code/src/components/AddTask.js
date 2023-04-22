/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import { v4 as uuidv4 } from 'uuid' // unique ID package

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: white;
`

const StyledInput = styled.input`
  height: 50px;
  color: #e5e5e5;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
  backdrop-filter: blur(1.5px);
  border: 1px solid rgba(255, 255, 255, 0.12);
`

const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const onAddTaskFormSubmit = (event) => {
    // prevent reset of form
    event.preventDefault()
    // creating new task
    const newTask = {
      // generate unique id
      id: uuidv4(),
      name: inputValue,
      isDone: false
    }
    // sending new task to store
    dispatch(tasks.actions.addTask(newTask))
    // clearing input value
    setInputValue('')
  }
  return (
    <section>
      <StyledForm onSubmit={onAddTaskFormSubmit}>
        <StyledLabel>
          To do-list
          <StyledInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addtaskInput"
            type="text"
          />
        </StyledLabel>
        <button type="submit">Add task</button>
      </StyledForm>
    </section>
  )
}

export default AddTask
