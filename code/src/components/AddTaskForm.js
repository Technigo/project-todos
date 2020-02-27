import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import './addtaskform.css'

export const AddTaskForm = () => {
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem(todoText))
    setTodoText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="input-task"
          type="text"
          placeholder="Add task.."
          required
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)} />
      </label>
      <button className="add-task" type="submit">+</button>
    </form>

  )
}