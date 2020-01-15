import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'

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
      <input type="checkbox" defaultChecked={task.isCompleted} onChange={handleCheckbox} />
      {task.isCompleted ? <span className="sr-only">Done</span> : <span className="sr-only">Todo</span>}
      {task.todoText}
      <button className="remove-button" type="button" onClick={handleTaskRemoval}>Delete</button>
    </li>

  )
}