/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// src/components/TaskList.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleComplete } from '../reducers/task'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => handleToggleComplete(task.id)}
          style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
          {task.text}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
