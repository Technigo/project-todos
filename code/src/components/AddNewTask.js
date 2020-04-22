import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

const Btn = styled.button`
  Background-color: black;
  color: white;
`

export const AddTask = () => {
  const [newTask, setNewTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      tasks.actions.addTodo({
          description: newTask,
          done: false
      })
    ); // name, category & dueDate as payload
    setNewTask('') // Clearing the input
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
        </label>
        <Btn type='submit' background='#3f8488'>
          Add Task
        </Btn>
        </form>
    </div>
  )}