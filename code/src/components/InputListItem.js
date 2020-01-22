import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/list.js'
import './InputListItem.css'

const MINTASKLENGTH = 3

export const InputListItem = () => {
  const dispatch = useDispatch()
  const [newTaskText, setNewTaskText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (newTaskText.length >= MINTASKLENGTH) {
      console.log(newTaskText.length)
      dispatch(todos.actions.addTask(newTaskText))
      setNewTaskText('')
    }
  }
  return (
    <li>
      <form onSubmit={handleSubmit}>  
        <button type="submit" alt="Add task"></button>
        <input 
          type="text" 
          onChange={event => setNewTaskText(event.target.value)}
          value={newTaskText}
          placeholder="New task..."
        />
      </form>
    </li>
  )
}