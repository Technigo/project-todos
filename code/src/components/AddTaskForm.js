import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import uniqid from 'uniqid';
import { Styled } from './AddTaskForm.styled.js'

export const AddTaskForm = () => {
  const [NewTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    const addNewTask = {
      id: uniqid(),
      name: NewTask,
      isCompleted: false
    }
    dispatch(tasks.actions.addItem(addNewTask))
    setNewTask('')
  }

  return (
    <Styled.Container>
      <form onSubmit={onFormSubmit}>
        <Styled.InputField
          type="text"
          placeholder="Add new task here..."
          value={NewTask}
          onChange={(event) => setNewTask(event.target.value)} />
        <Styled.FormButton
          type="submit"
          disabled={NewTask === ''}>
                  Add!
        </Styled.FormButton>
      </form>
    </Styled.Container>
  )
}