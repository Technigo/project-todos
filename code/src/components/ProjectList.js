/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProjectComplete } from '../reducers/projects'

const ProjectList = () => {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleProjectComplete(id))
  }

  return (
    <ul>
      {projects.map((project) => (
        <li
          key={project.id}
          onClick={() => handleToggleComplete(project.id)}
          style={{ textDecoration: project.complete ? 'line-through' : 'none' }}>
          {project.name}
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
