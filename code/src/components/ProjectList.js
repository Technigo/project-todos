/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProjectComplete, deleteProject } from '../reducers/projects'

const ProjectList = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)

  const handleToggleComplete = (id) => {
    dispatch(toggleProjectComplete(id))
  }

  const handleDeleteProject = (id) => {
    dispatch(deleteProject(id));
  };
  return (
    <ul>
      {projects.map((project) => (
        <li
          key={project.id}
          onClick={() => handleToggleComplete(project.id)}
          style={{ textDecoration: project.complete ? 'line-through' : 'none' }}>
          <span onClick={() => handleToggleComplete(project.id)}>{project.name}</span>
          <button type="button" onClick={(e) => { e.stopPropagation(); handleDeleteProject(project.id); }}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
