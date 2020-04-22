import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from '../library/Button'
import { Input} from '../library/Input'


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
          <Input
            type='text'
            placeholder= 'Add things to do'
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
        </label>
        <Button type='submit'>
          Add
        </Button>
        </form>
    </div>
  )}