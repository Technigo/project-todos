/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// src/components/TaskList.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleComplete, removeTask } from '../reducers/tasks'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const projects = useSelector((state) => state.projects)
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

    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <ul>
            {tasks
              .filter((task) => task.projectId === project.id)
              .map((task) => (
                <li
                  key={task.id}
                  onClick={() => handleToggleComplete(task.id)}
                  style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
                  {task.text} <span>({formatDate(task.createdAt)})</span>
                  <button type="button" onClick={(e) => { e.stopPropagation(); handleRemoveTask(task.id); }}>
                  Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TaskList
