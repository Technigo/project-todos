import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { tasks } from 'reducers/Tasks'

import './AddTask.css'

export const AddTask = () => {
  const [taskInput, SetTaskInput] = useState('')
  const dispatch = useDispatch()
  const date = new Date()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskInput.length > 0) { //have to have a message longer than 0
      dispatch(tasks.actions.addTask({ todo: taskInput, createdAt: date.getTime()}))
      SetTaskInput('')  //emptying input field after submitting
    }

  }
    return (
      <form onSubmit={handleSubmit}>
        <label className='input-label'>
        <button type="submit" className="add-task-button"><span role="img" aria-label="add-button" className='plus-sign'>➕</span></button>
        <input
          tabIndex='0'
          type='text'
          value={taskInput}
          onChange={(event) => SetTaskInput(event.target.value)}
          placeholder="Add a to-do"/>
        </label>
      </form>

    )

  }
