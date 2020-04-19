import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(ToDo.actions.addItem(name))
    setName('')
  }

  return (
    <>
    <h1>Awesome stuff in small steps</h1><h2>There will always be things to do, this todo list helps you celebrate the journey!" </h2>
    <form onSubmit={handleSubmit}>
      <label>
        Add a To-Do:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <button type="submit">Add it</button>
    </form>
    </>
  )
}
