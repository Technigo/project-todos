import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/list.js'
import './InputListItem.css'

export const InputListItem = () => {
  const dispatch = useDispatch()
  const [newTaskText, setNewTaskText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(todos.actions.addTask(newTaskText))
    setNewTaskText('')

  }
  return (
    <li>
      <form onSubmit={handleSubmit}>  
        <input 
          type="text" 
          onChange={event => setNewTaskText(event.target.value)}
          value={newTaskText}/>
        <button type="submit">Add Item</button>
      </form>
    </li>
  )
}