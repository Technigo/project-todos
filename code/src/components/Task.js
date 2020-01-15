import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleCheckbox = (task) => {
    dispatch(todoList.actions.toggleTaskStatus(task.id))
  }
  return (

    <li className={`task-item  ${task.isCompleted ? "task-completed" : "task-todo"}`}>
      <input type="checkbox" checked={task.isCompleted} onChange={() => handleCheckbox(task)} />
      {task.isCompleted ? <span className="sr-only">Done</span> : <span className="sr-only">Todo</span>}

      {task.todoText}
    </li>

  )
}