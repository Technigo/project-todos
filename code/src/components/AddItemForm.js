/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addItem(name))
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="theName">Name:</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <button type="submit">Add item</button>
    </form>
  )
}
