import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos.js'

export const TodoInput = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState("")

  const handleOnSubmit = e => {
    e.preventDefault()

    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false
      })
    )

    setInputValue()
  }
  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        required
        className="todo-input-text"
      ></input>
      <input
        type="submit"
        required
        className="todo-input-bottom"
        value="Add"
      ></input>
    </form>
  )
}
