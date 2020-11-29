import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos.js'
// need to import the reducer we dispatch our action to

const InputField = styled.textarea`
  padding: 10px 0;
  font-size: 20px;
  height: 24px;
  width: 300px;
  background-color: #E5E5E5;
  border: none;
  border-bottom: 1px solid black;
`

const SubmitButton = styled.input`
  border-radius: 50px;
  padding: 10px 20px;  
  width: 200px;
  font-size: 16px;
  display: block;
  margin: 10px 50px;
  height: 50px;
  border: none;
  background-color: #00CFC3;
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