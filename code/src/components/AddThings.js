import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bag } from '../redux/reducers/bag'

export const AddThings = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(bag.actions.addThings( value ))
  }
  
  return (
    <form>
    <label>
      Make sure you wont forget anything
      <input
      type='text'
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="add things"
      />
    </label>
    <button onClick={handleSubmit}>Add Thing</button> 
    </form>
  )
}