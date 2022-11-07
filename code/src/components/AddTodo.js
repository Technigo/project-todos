/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todo'
import styled from 'styled-components/macro'

const AddTodoForm = styled.form`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`

const FormLabel = styled.input`
  font-size: 120%;
`

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Gaegu', cursive;
  background: transparent;
  margin: 5px;
  font-size: 18px;
`

const AddButton = styled.button`
  font-size: 120%;
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;

  &:hover {
    font-weight: bold;
  }
`

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTodo = { id: Date.now().toString(),
      createdAt: Date.now(),
      text: inputValue,
      isDone: false }
    dispatch(todos.actions.addItem(newTodo))
    setInputValue('')
  }

  return (
    <AddTodoForm onSubmit={onFormSubmit}>
      <FormLabel>
         NEW TASK:
        <TextInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </FormLabel>
      <AddButton type="submit">ADD</AddButton>
    </AddTodoForm>
  )
}

export default AddTodo