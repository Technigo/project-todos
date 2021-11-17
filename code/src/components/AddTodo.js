import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 250px;
  margin: 30px auto;
  border: 1px solid grey;
  padding: 10px 5px;
  box-sizing: border-box;
`
const Input = styled.input`
  flex-grow: 1;
  border: 0;
`

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('')
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onAddTodo()
    }
  }

  return (
    <InputWrapper>
      <button disabled={input <= 0} onClick={onAddTodo}>
        +
      </button>
      <Input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </InputWrapper>
  )
}
