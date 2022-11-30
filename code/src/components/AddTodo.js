/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todo'
import styled from 'styled-components/macro'

const AddTodoForm = styled.form`
  padding-top: 2.5em;
  padding-bottom: 1.5em;
  display: flex;
  align-items: center;
`

const FormLabel = styled.p`
  display: inline-block;
  padding:0;
`

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Gaegu', cursive;
  background: transparent;
  margin: 5px;
  font-size: 21px;
  width: 185px;
  border-bottom: 2px dashed;

  :focus {
    outline: none;
  }
`

const AddButton = styled.button`
  font-size: 110%;
  cursor: pointer;
  font-family: 'Gaegu', cursive;
  background: transparent;
  border: none;
  font-weight: bold;
  padding:0;
  margin-left:4px;

  :disabled {
    color: black;
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
      <label>
        <FormLabel>
          New task:
        </FormLabel>
        <TextInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <AddButton type="submit" disabled={inputValue.length === 0}>ADD</AddButton>
    </AddTodoForm>
  )
}

export default AddTodo