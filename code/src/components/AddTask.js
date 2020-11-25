import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  background-color: orange;
  padding: 20px 20px 10px 25px;
  width: 80%;
`

const TextField = styled.input`
  background-color: yellow;
`

const CategoryField = styled.select`
  background-color: yellow;

  option {
    color: red;
    font-size: 20px;
    background: blue;
    display: flex;
  }
`

const TaskButton = styled.button`
  background-color: yellow;
`

export const AddTask = () => {
  const [newTask, setNewTask] = useState()
  const [category, setCategory] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({ newTask, category }))
    setNewTask('')
    setCategory('')
  }

  return (
    <Container
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        value={newTask}
        placeholder="New task.."
        required
        onChange={event => setNewTask(event.target.value)}
      />
      <CategoryField
        value={category}
        required
        onChange={event => setCategory(event.target.value)}
      >
        <option selected disabled>Select category...</option>
        <option value="todo">to do</option>
        <option value="activity">activity</option>
        <option value="finance">finance</option>
        <option value="appointment">appointment</option>
      </CategoryField>
      <TaskButton
        type="submit"
      >
        Add +
      </TaskButton>
    </Container>
  )
}