import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bag } from '../redux/reducers/bag'

import styled from 'styled-components'

export const AddForm = styled.form`
  display: flex;
  padding-top: 80px;
  widht: 100%;
  height: 200px;
  background-color: #0E3932;
  margin: 0;

`
export const TextInput = styled.input`
  border: none;
  background-color: #0E3932;
  border-bottom: 1.5px solid #C8F9F0;
`

export const AddThings = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(bag.actions.addThings( value ))
  }
  
  return (
    <AddForm>
    <label className="addReminder">
      Make sure you wont forget anything
      <TextInput
      type='text'
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="add things"
      />
    </label>
    <button onClick={handleSubmit}>Add Thing</button> 
    </AddForm>
  )
}