import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from 'reducers/todos'

const FormSection = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FormContainer = styled.form`
  border-radius: 4px;
  border: 4px solid linen;
  padding: 20px;
  margin-bottom: 6px;
  background: #F08FC0;
  position: relative;
  @media (min-width: 768px) {
    width: 475px;
  }
`

const InputField = styled.input`
  height: 36px;
  border: none;
  background: linen;
  border-radius: 4px;

  ::placeholder {
    padding-left: 6px;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
  }
  @media (min-width: 768px) {
    width: 400px;

    ::placeholder {
      padding-left: 18px;
    }
  }
`

const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 2px;
  bottom: 2px;
  padding-left: 20px;
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
    <FormSection>
    <FormContainer onSubmit={onFormSubmit}>
        <InputField 
          type="text" 
          placeholder="Type here..."
          value={inputValue}
          required 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddButton type="submit" disabled={inputValue.length > 100}>
          <AddEmoji role="img" aria-label="plus sign emoji">✚</AddEmoji>
        </AddButton>
    </FormContainer>
    </FormSection>
  )
}

export default AddTodo