import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import todos from '../reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [priority, setPriority] = useState('')
  const dispatch = useDispatch()


  const onPriorityChange = (event) => {
    setPriority(event.target.value)
  }

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))

    setInput('')
  }

  return (
    <AddTodoContainer>
      <AddTodoInput
        type="text"
        placeholder='Add todo'
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
        <PrioritySelect
        value={priority}
        onChange={onPriorityChange}
      >
        <option value=''>Priority</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </PrioritySelect>
      <AddTodoButton onClick={onAddTodo}>+</AddTodoButton>
    </AddTodoContainer>
  )
}

const AddTodoContainer = styled.section`
  padding: 20px 35px 0 35px;
  font-family: 'Oxygen', sans-serif;

`

const AddTodoInput = styled.input`
  width: 50%;
  border-radius: 25px;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
  border: none;
  font-family: 'Oxygen', sans-serif;
`

const AddTodoButton = styled.button`
  border-radius: 50px;
  font-size: 25px;
  border: none;

  &:hover {
    color: gray;

    }
`
const PrioritySelect = styled.select`
  justify-self: end;
  margin: 0;
  border: none;
  font-family: inherit;
  font-size: 15px;
  background: none;
`