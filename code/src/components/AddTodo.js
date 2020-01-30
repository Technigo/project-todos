/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddTodo = () => {
  const [todoName, setTodoName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo(todoName))
    setTodoName('')
  }

  return (
    <div className="inputField">
      <form
        onSubmit={handleSubmit}>
        <button
          className="addTodoButton"
          type="submit">
          <span className="emoji" role="img" aria-label="add">➕</span>
        </button>
        <label className="inputLabel">
          <input
            type="text"
            value={todoName}
            placeholder="Add task"
            onChange={(event) => setTodoName(event.target.value)} />
        </label>
      </form>
    </div>
  )
}