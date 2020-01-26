/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from 'reducers/todo'

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name) { //makes sure that no empty tasks are created
    dispatch(todo.actions.addItem(name))
    setName('') //clears the input field
  }
  }

  return (
  
  <div className="add-task-container">

    <form onSubmit={handleSubmit}>
      <label>New task:
        <input type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} />
      </label>

      <button type="submit">➕ </button>
    </form>

  </div>  
  )
}