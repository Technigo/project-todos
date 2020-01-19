import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import "./task.css"
import deleteSymbol from '../icons/icons8-delete-yellow.svg'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleCheckbox = () => {
    dispatch(todos.actions.toggleTaskStatus(task.id))
  }

  const handleTaskRemoval = () => {
    dispatch(todos.actions.removeTask(task.id))
  }

  const toggleClass = task.isCompleted ? "task-completed" : "task-todo"

  return (

    <li className={`task-item ${toggleClass}`}>
      <input
        id={`task-${task.id}`}
        type="checkbox"
        defaultChecked={task.isCompleted}
        onChange={handleCheckbox}
        className="checkbox" />

      <label htmlFor={`task-${task.id}`} className="checkbox-label">
        <span className="task-text">
          {task.text}
        </span>
      </label>

      <button
        aria-label={`Delete ${task.text}`}
        type="button"
        onClick={handleTaskRemoval}
        className="remove-button">
        <img src={deleteSymbol} alt="Delete" className="delete-symbol" />
      </button>
    </li>

  )
}