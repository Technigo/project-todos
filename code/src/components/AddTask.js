// src/components/AddTask.js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../reducers/tasks'

const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTask({ text: input.trim(), complete: false }))
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
