/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import { v4 as uuidv4 } from 'uuid' // unique ID package
import AddIcon from '../img/add-square-svgrepo-com.svg'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 0;
`

const StyledInput = styled.input`
  height: 40px;
  width: 80%;
  color: #f5f5f5;
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
const Add = styled.img`
  height: 2rem;
`

const VisuallyHiddenLabel = styled.label`
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

const Button = styled.button`
  background: transparent;
  border: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: none;
    outline: none;
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.2);
  }

  ${(props) => props.disabled && css`
      opacity: 0.5;
    `}
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
        <Title>Check it!</Title>
        <StyledInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addtaskInput"
          type="text"
          aria-label="Add task"
          placeholder="Add task..."
        />
        <Button
          type="submit"
          aria-label="Add task"
          disabled={inputValue.length < 4 || inputValue.length > 22}>
          <VisuallyHiddenLabel>Add task</VisuallyHiddenLabel>
          <Add src={AddIcon} />
        </Button>
      </StyledForm>
    </section>
  )
}

export default AddTask
