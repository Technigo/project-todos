import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const AddTodos = () => {
  const [input, setInput] = useState('')

  //is needed then use of dispatch
  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
  }

  // Page does not reload on submit and clear input field
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setInput('')
  }

  return (
    <form onSubmit={handleOnSubmit} className="input-container">
      <input
        id="todo-input"
        type="text"
        className="input-text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Add a to do"
      />
      <button
        type="submit"
        className="addTodo-btn"
        onClick={onAddTodo}
        disabled={input.length < 1}
      >
        +
      </button>
    </form>
  )
}

export default AddTodos
