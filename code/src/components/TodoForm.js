import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TodoForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default TodoForm