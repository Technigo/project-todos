/* eslint-disable no-case-declarations */
/* eslint-disable no-use-before-define */
// src/components/AddTask.js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { addTask } from '../reducers/tasks'

// eslint-disable-next-line no-lone-blocks
{ /* const capitalize = (stringToCapitalise) => {
  return stringToCapitalise.charAt(0).toUpperCase() + stringToCapitalise.slice(1);
} */ }

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Select = styled.select`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;
  color: #878894;
`;

const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  color: #2d2e38;
  color: #a0a0b4;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;
`;

const Button = styled.button`
 
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #b8b4ba;
  color:white;
  font-size:16px;


  &:hover {
  background-color: #4d5d3e;
  }
`;

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
    <Form onSubmit={handleSubmit}>
      <Select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}>
        <option value="">Select a project</option>
        {projectList.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task" />
      <Select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="later">Later this week</option>
      </Select>
      {selectedDate === 'later' && (
        <div>
          <input
            type="date"
            value={selectedDueDate}
            onChange={(e) => setSelectedDueDate(e.target.value)} />
          <Button type="button" onClick={() => setSelectedDate('custom')}>Cancel</Button>
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
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default AddTask
