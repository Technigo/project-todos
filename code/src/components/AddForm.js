import React, { useState } from 'react'
import './form.css'

export const AddForm = () => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit!', todo)
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Todo:
        <input type="text" className="input-container" value={todo} onChange={(event) => setTodo(event.target.value)} />
      </label>
      <button type="submit" className="add-button">ADD</button>
    </form>
  )
}