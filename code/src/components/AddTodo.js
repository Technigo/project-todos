import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('')
  }

  return (
    <div>
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
    </div>
  )
}
