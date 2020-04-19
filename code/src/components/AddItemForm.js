import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toDo } from 'reducers/toDo'

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(toDo.actions.addItem(name))
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <button type="submit">Add item</button>
    </form>
  )
}
