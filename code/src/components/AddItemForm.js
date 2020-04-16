import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fridge.actions.addItem(name))
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
