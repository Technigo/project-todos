import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import { todos } from 'reducers/todos'

export const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()

    dispatch(
      todos.actions.addItem({
        id: uuidv4(),
        text: input,
        isComplete: false
      })
    )
    setInput('')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        placeholder="new item"
        value={input}
      />
      <button type="submit" aria-label="Add item">
        +
      </button>
    </form>
  )
} 