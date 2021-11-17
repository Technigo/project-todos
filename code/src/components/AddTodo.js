import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
`

export const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('')
  }

  return (
    <StyledContainer>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <select>
        {' '}
        {/* Ändra till radio buttons */}
        <option value="personal">Personal</option>
        <option value="business">Business</option>
        <option value="shopping">Shopping</option>
      </select>
      <button onClick={onAddTodo}>Add todo</button>
    </StyledContainer>
  )
}
