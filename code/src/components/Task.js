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

  return (

    <li className={`task-item  ${task.isCompleted ? "task-completed" : "task-todo"}`}>
      <input id={`todo-${task.id}`} type="checkbox" defaultChecked={task.isCompleted} onChange={handleCheckbox} className="checkbox" />
      <label className="checkbox-label" for={`todo-${task.id}`}>
        {task.todoText}
      </label>
      <button aria-label={`Delete ${task.todoText}`} className="remove-button" type="button" onClick={handleTaskRemoval}>
        <img className="delete-symbol" src={deleteSymbol} alt="Delete" />
      </button>
    </li>

  )
}