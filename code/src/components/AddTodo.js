import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
    <FormWrapper>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </FormWrapper>
  )
}
