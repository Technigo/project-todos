import React from "react"
import { useDispatch } from "react-redux"

import { todoTasks } from "reducer/todoTasks"

export const SingleTodo = ({ id, text, complete }) => {

  // TODO:
  //add done/undone functionality
  //add checkbox
  //add delete button
  //styled component for done and undone state

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoTasks.actions.toggleComplete(id))
  }

  return (

    <li>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleCheckboxClick}
        />
      </label>

      {text}

      <button type="button">
        Remove
      </button>
    </li>
  )
}