import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { tasks } from 'reducers/Tasks'

import './AddTask.css'

// can add due data here too
// moment?
export const AddTask = () => {
  const [taskInput, SetTaskInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskInput.length > 0) { //have to have a message longer than 0
      dispatch(tasks.actions.addTask(taskInput))
      SetTaskInput('')  //emptying input field after submitting
    }
  }
    return (
      <form onSubmit={handleSubmit}>
        <label className='input-label'>
        <button type="submit" className="add-task-button"><span role="img" aria-label="add-button">➕</span></button>
        <input
          type='text'
          value={taskInput}
          onChange={(event) => SetTaskInput(event.target.value)}
          placeholder="Add a to-do"/>
        </label>
      </form>

    )

  }
