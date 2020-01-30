/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Todo = ({ name, done, id }) => {
  const dispatch = useDispatch()

  const handleCompleteTodo = () => {
    dispatch(todos.actions.toggleCompleteTodo(id))
  }
  const handleRemove = () => {
    dispatch(todos.actions.removeItem(id))
  }

  return (
    <div className="todos">
      <li className="todo">
        <label>
          <input
            className="checkBox"
            type="checkbox"
            checked={done}
            onChange={handleCompleteTodo} />
          <span>
            {name}
          </span>
        </label>
        <button
          className="removeButton"
          type="button"
          onClick={handleRemove}>
          Remove
        </button>
      </li>
    </div>
  )
}