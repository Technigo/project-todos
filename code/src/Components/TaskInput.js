import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todo } from "../Reducers/todo"
import { v4 as uuidv4 } from 'uuid' // for unique id

export const TaskInput = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
      dispatch(todo.actions.addItem({
      newItem: {
        id: uuidv4(), 
        text: input,
        isComplete: false,
      }
    }))
    setInput("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label className="task-input">
        <input
          className="task-input-field"
          placeholder="Add a new task..."
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </label>
      <button className="task-add-button" type="submit" onClick={handleSubmit}>
        <span className="button-icon" role="button" aria-label="remove" tabIndex="0">
          +
        </span>
      </button>
    </form>
  )
}