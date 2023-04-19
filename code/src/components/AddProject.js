import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../reducers/projects';

const AddProject = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addProject({ name: input.trim() }))
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new project" />
      <button type="submit">Add</button>
    </form>

  )
}

export default AddProject