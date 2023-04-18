/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// src/components/TaskList.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleComplete, removeTask } from '../reducers/tasks'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
          <span onClick={() => handleToggleComplete(task.id)}>
            {task.text}
            <span>({formatDate(task.createdAt)})</span>
          </span>
          <button type="button" onClick={() => handleRemoveTask(task.id)}>
           Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
