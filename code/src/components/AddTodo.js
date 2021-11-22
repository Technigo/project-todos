import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

import { todos } from '../reducers/todos'

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  border-top: 2px solid black;
  padding: 10px 5px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 05);
  position: fixed;
  bottom: 0;
`
const Input = styled.input`
  flex-grow: 1;
  height: 60px;
  border: 0;
  font-size: 5rem;
`
const Button = styled.button`
  margin: 5px;
  height: 4rem;
  width: 4rem;
  font-size: 2.5rem;
  text-align: center;
  border-radius: 10px;
  border: 0;
  color: black;
`

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const clearInput = e => {
    setInput('')
    e.target.blur()
  }

  const onAddTodo = e => {
    if (e.key === 'Enter') {
      dispatch(todos.actions.addTodo(input))
      clearInput(e)
    }
  }

  const onAddAndEdit = e => {
    dispatch(todos.actions.addAndEditTodo(input))
    clearInput(e)
  }

  return (
    <InputWrapper>
      <Button disabled={input <= 0} onClick={onAddAndEdit}>
        +
      </Button>
      <Input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onAddTodo}
      />
    </InputWrapper>
  )
}
