import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { EntryContainer } from '../styledComponents/EntryContainer'
import { Input } from '../styledComponents/Input'
import { Button } from '../styledComponents/Button'


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
    );
    setNewTask('') 
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