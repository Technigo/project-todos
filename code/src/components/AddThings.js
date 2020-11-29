import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bag } from '../redux/reducers/bag'

import styled from 'styled-components'
import { AddButton } from 'lib/Button'

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  aling-content: column;
  flex-wrap: wrap;
  padding-top: 80px;
  widht: 100%;
  height: 200px;
  background-color: #0E3932;
  padding: 15px;
  margin: 0;
`
const AddReminder = styled.label`
  color: #478A72;
  margin-top: 55px;
` 

const TextInput = styled.input`
  border: none;
  display: block;
  background-color: #0E3932;
  border-bottom: 1.5px solid #C8F9F0;
  color: #C8F9F0;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: #C8F9F0;
    }
`


export const AddThings = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(bag.actions.addThings(value));
    setValue("")
  }
  
  return (
      <AddForm>
        <AddReminder>
        Make sure you wont forget anything
        <TextInput
          type='text'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Add things"
        />
        </AddReminder>
        <AddButton onClick={handleSubmit} aria-label="Add to list">+</AddButton> 
      </AddForm>
  )
}