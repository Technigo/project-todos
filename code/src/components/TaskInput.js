import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos.js'
// need to import the reducer we dispatch our action to

const InputField = styled.textarea`
  padding: 10px 0;
  height: 24px;
  width: 300px;
  border: none;
  border-bottom: 1px solid black;
  background-color: #E5E5E5;
  font-size: 20px;
`

const SubmitButton = styled.input`
  display: block;
  margin: 10px 50px;
  padding: 10px 20px; 
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 50px;
  background-color: #00CFC3;
  font-size: 16px;
  color: white;
  font-weight: 700;
  
  &:hover {cursor: pointer};
`

export const TaskInput = () => {

  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    dispatch(todos.actions.addTask(text))
    setText("")
  }

  return (
    <form onSubmit={onSubmit}>
      <InputField
        value={text}
        onChange={event => setText(event.target.value)}
        className="text-input">
      </InputField>
      <SubmitButton
        type="submit"
        value="Add to do"
        className="submit-button">
      </SubmitButton>
    </form>
  )

}