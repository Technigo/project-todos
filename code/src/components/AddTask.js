import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

const AddTaskContainer = styled.form`
display: flex;
padding: 10px;
height: 40px;
`

const TaskInput = styled.input.attrs({ type: 'text' })`
background-color: #feb59b;
border: none; 
flex-grow: 1;
padding: 10px;
&:focus {
  outline: none;
  background-color: #f5c29d;
  transition: background-color 1s ease;
}
`

const PlusButton = styled.button`
background-color: #feb59b;
border: none; 
margin-left: auto;
font-size: 18px;
color: white;
padding: 10px;
`

export const AddTask = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({ task }))
    setTask('')
  }

  return (
    <AddTaskContainer onSubmit={handleSubmit}>
      <TaskInput
        type='text'
        placeholder="Add task"
        value={task}
        onChange={(event) => setTask(event.target.value)} />

      <PlusButton 
        type='submit'
        disabled={ task.length < 1} >  + </PlusButton>
    </AddTaskContainer>
  )
}