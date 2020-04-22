import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'
import { EntryContainer } from '../library/EntryContainer'
import { Input } from '../library/Input'
import { Button } from '../library/Button'



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
      <EntryContainer onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder= 'Add things to do'
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
        <Button type='submit'>
          Add
        </Button>
        </EntryContainer>
  )}