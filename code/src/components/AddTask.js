/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'

const AddTaskForm = styled.form`
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
  font-family: 'Shadows Into Light', cursive;
  background: transparent;
  margin: 5px;
  font-size: 21px;
  width: 185px;

  :focus {
    outline: none;
  }
`

const AddButton = styled.button`
  font-size: 110%;
  cursor: pointer;
  font-family: 'Shadows Into Light', cursive;
  background: transparent;
  border: none;
  font-weight: bold;
  padding:0;
  margin-left:4px;
  color: black;

  :disabled {
    color: black;
  }

  :hover {
    font-weight: normal;
    color: black;
  }
`

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTask = { id: Date.now().toString(),
      createdAt: Date.now(),
      text: inputValue,
      isDone: false }
    dispatch(tasks.actions.addItem(newTask))
    setInputValue('')
  }

  return (
    <AddTaskForm onSubmit={onFormSubmit}>
      <label>
        <FormLabel>
              Add task:
        </FormLabel>
        <TextInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <AddButton type="submit" disabled={inputValue.length === 0}>ADD</AddButton>
    </AddTaskForm>
  )
}

export default AddTask