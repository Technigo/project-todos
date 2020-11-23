import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'

import { tasks } from '../reducers/tasks'


export const AddTask = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({ task }))
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        what: 
        <input 
        type='text'
        value={task}
        onChange={(event) => setTask(event.target.value)
        }/>
      </label>

      <button type='submit'> Add task </button>
    </form>
  )
}