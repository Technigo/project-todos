import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'


export const AddTask = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({ task }))
    setTask('')
  }

  const AddTaskContainer = styled.form`
    display: flex;
    padding: 10px;
    height: 40px;
  `

  const TaskInput = styled.input`
    background-color: #F6D1E5;
    border: none; 
    flex-grow: 1;
    padding: 10px;
  `

  const PlusButton = styled.button`
    background-color: #F6D1E5;
    border: none; 
    margin-left: auto;
    font-size: 18px;
    color: #6E355C;
    padding: 10px;
    
    `
  

  return (
      <AddTaskContainer onSubmit={handleSubmit}>
        <TaskInput
          type='text'
          placeholder="Add task"
          value={task}
          onChange={(event) => setTask(event.target.value)
          } />

        <PlusButton type='submit'> + </PlusButton>
      </AddTaskContainer>
  )
}