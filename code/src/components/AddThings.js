import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bag } from '../redux/reducers/bag'

export const AddThings = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(bag.actions.addThings({ name }))
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Do not forget anything
      <input
      type='text'
      value={name}
      onChange={(event) => setName(event.target.value)}
      />
    </label>
    </form>
  )
}