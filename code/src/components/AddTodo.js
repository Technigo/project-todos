import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { todos } from 'reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  // const numberOfTodos = useSelector((store) => store.todos.length)

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('') //Clears input field
  }
  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button disabled={input < 1} onClick={() => onAddTodo()}>
        Add todo
      </button>
    </div>
  )
}
