import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"
import styled from "styled-components"

import "./addItemForm.css"


export const AddItemForm = () => {
  const [taskInput, setTaskInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit", taskInput)
    dispatch(tasks.actions.addTask(taskInput))
    setTaskInput("")
    //To empty input-field after submit

    // dispatch(tasks.actions.countTasks())

  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input-label">
        <input type="text"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          placeholder="Add task..." />
        <button type="submit" className="add-task-button">➕</button>
      </label>

    </form>
  )
}

