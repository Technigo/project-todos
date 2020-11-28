import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

import Logo from './assets/plus.svg'

export const AddTask = () => {
  const [newTask, setNewTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({newTask}))
    setNewTask('')
  }

  return (
    <Container
      onSubmit={handleSubmit}
    >
      <TaskButton
        type="submit"
        disabled={newTask.length < 5 ? true : false}
      >
        <AddIcon
          src={Logo}
          alt="add task"
        />
      </TaskButton>
      <TextField
        type="text"
        value={newTask}
        placeholder="add new task.."
        onChange={event => setNewTask(event.target.value)}
      />
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  background-color: #ffffff;
  padding: 10px 10px;
  margin: 10px 0;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  width: 100%;
`

const TextField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: 2px solid #9576A5;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const TaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  @media (max-width: 280px) {
    padding: 0 8px 0 0;
  }
`
const AddIcon = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.4);
  }
`