/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todos'
import { AddNewTaskBtn, AddNewTaskWrapper } from './AddNewTask.styles'

export const AddNewTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const addNewTodo = () => {
    dispatch(todos.actions.addNewTask(input))
    setInput('')
  }

  return (
    <AddNewTaskWrapper>
      {/* <label hidden htmlFor="newTaskInput" aria-label="new task input" /> */}
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <AddNewTaskBtn type="button" onClick={addNewTodo}>&#43;</AddNewTaskBtn>
    </AddNewTaskWrapper>
  )
}
