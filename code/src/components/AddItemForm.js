import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"

import "./addItemForm.css"


export const AddItemForm = () => {
  const [taskInput, setTaskInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskInput.length > 0) {
      dispatch(tasks.actions.addTask(taskInput))
      setTaskInput("")
      //To empty input-field after submit
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input-label">
        <input type="text"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          placeholder="Add task..." />
        <button type="submit" className="add-task-button"><span role="img" aria-label="add-button">➕</span></button>
      </label>

    </form>
  )
}

