import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from 'reducers/todos'

const FormContainer = styled.form`
  border-radius: 4px;
  border: 4px solid linen;
  padding: 20px;
  margin-bottom: 6px;
  background: #F08FC0;
  position: relative;
`

const InputField = styled.input`
  width: 300px;
  height: 28px;
  border: none;
  background: linen;
  border-radius: 4px;
`

const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 2px;
  bottom: 2px;
`

const AddEmoji = styled.span`
  font-size: 28px;
`

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
      event.preventDefault()

      const newTodo = {
          id: uniqid(),
          name: inputValue,
          isDone: false
      }

      dispatch(todos.actions.addItem(newTodo))

      setInputValue("")
  }

  return (
    <FormContainer onSubmit={onFormSubmit}>
        <InputField 
          type="text" 
          placeholder="Type something here..."
          value={inputValue}
          required 
          onChange={(e) => setInputValue(e.target.value)}
        />
      <AddButton type="submit"><AddEmoji role="img" aria-label="plus sign emoji">✚</AddEmoji></AddButton>
    </FormContainer>
  )
}

export default AddTodo