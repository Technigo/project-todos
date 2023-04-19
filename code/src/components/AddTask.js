/* eslint-disable no-use-before-define */
// src/components/AddTask.js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../reducers/tasks'

const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && selectedProject) {
      dispatch(addTask({ text: input.trim(),
        complete: false,
        projectId: parseInt(selectedProject, 10) }))
      setInput('')
    }
  }

  const projectList = useSelector((state) => state.projects)
  const [selectedProject, setSelectedProject] = useState('')

  return (

    <form onSubmit={handleSubmit}>
      {/* dropdown menu added */}
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}>
        <option value="">Select a project</option>
        {projectList.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
