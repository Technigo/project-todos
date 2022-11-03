/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
// import moment from 'moment'
import { AddNewTaskBtn, AddNewTaskWrapper } from './AddNewTask.styles'

export const AddNewTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [dueDate, setDueDate] = useState('')

  const addNewTodo = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addNewTask({ dueDate, input }))
    setInput('')
    setDueDate('')
  }

  return (
    <AddNewTaskWrapper onSubmit={addNewTodo}>
      <label hidden id="todoLabel" htmlFor="newTaskInput">Todo</label>
      <input
        type="text"
        required
        placeholder="Add new task"
        name="newTaskInput"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <span id="dueDateLabel">
        <label htmlFor="dueDateInput">Due Date </label>
        <input
          type="date"
          value={dueDate}
          name="dueDateInput"
          max="2023-12-31"
          onChange={(e) => setDueDate(e.target.value)} />
      </span>

      <AddNewTaskBtn type="submit">&#43;</AddNewTaskBtn>
    </AddNewTaskWrapper>
  )
}
