import React from "react"
import { useDispatch } from "react-redux"

import { todoTasks } from "reducer/todoTasks"

export const SingleTodo = ({ id, text, complete }) => {

  // TODO:
  //add done/undone functionality
  //add functioning delete button
  //styled component for done and undone state

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoTasks.actions.toggleComplete(id))
  }

  const handleRemoveButtonClick = () => {
    //dispatch(todoTasks.actions.removeTask(id)) - in the video
    dispatch(todoTasks.actions.removeTask(id))
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

      <button
        type="button"
        onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}