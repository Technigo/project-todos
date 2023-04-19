/* eslint-disable no-case-declarations */
/* eslint-disable no-use-before-define */
// src/components/AddTask.js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../reducers/tasks'

const AddTask = () => {
  const [input, setInput] = useState('')
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedDate, setSelectedDate] = useState('today')
  const [selectedDueDate, setSelectedDueDate] = useState('')
  const dispatch = useDispatch()
  const projectList = useSelector((state) => state.projects)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && selectedProject) {
      const dueDate = getDueDate(selectedDate)
      dispatch(addTask({
        text: input.trim(),
        complete: false,
        projectId: parseInt(selectedProject, 10),
        dueDate
      }))
      setInput('')
      setSelectedProject('')
      setSelectedDate('today')
      setSelectedDueDate('')
    }
  }

  const getDueDate = (date) => {
    switch (date) {
      case 'tomorrow':
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return tomorrow.toISOString()
      case 'later':
        const later = new Date()
        later.setDate(later.getDate() + 7)
        return later.toISOString()
      default:
        return new Date().toISOString()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="later">Later this week</option>
      </select>
      {selectedDate === 'later' && (
        <div>
          <input
            type="date"
            value={selectedDueDate}
            onChange={(e) => setSelectedDueDate(e.target.value)} />
          <button type="button" onClick={() => setSelectedDate('custom')}>Cancel</button>
        </div>
      )}
      {selectedDate === 'custom' && (
        <div>
          <input
            type="date"
            value={selectedDueDate}
            onChange={(e) => setSelectedDueDate(e.target.value)} />
        </div>
      )}
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
