import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import "./task.css"
import deleteSymbol from './icons8-delete-yellow.svg'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleCheckbox = () => {
    dispatch(todoList.actions.toggleTaskStatus(task.id))
  }

  const handleTaskRemoval = () => {
    dispatch(todoList.actions.removeTask(task.id))
  }

  const toggleClass = task.isCompleted ? "task-completed" : "task-todo"

  return (

    <li className={`task-item ${toggleClass}`}>
      <input
        id={`todo-${task.id}`}
        type="checkbox"
        defaultChecked={task.isCompleted}
        onChange={handleCheckbox}
        className="checkbox" />

      <label htmlFor={`todo-${task.id}`} className="checkbox-label">
        {task.todoText}
      </label>

      <button
        aria-label={`Delete ${task.todoText}`}
        type="button"
        onClick={handleTaskRemoval}
        className="remove-button">
        <img src={deleteSymbol} alt="Delete" className="delete-symbol" />
      </button>
    </li>

  )
}