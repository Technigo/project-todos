import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'

import "./clearButton.css"

export const ClearButton = () => {

  const dispatch = useDispatch()

  const numberOfTasks = useSelector(state => state.todos.tasks.length)

  return (
    <>
      {numberOfTasks && (
        <button
          aria-label="Clear all tasks"
          type="submit"
          onClick={() => dispatch(todos.actions.clearAllTasks())}
          className="clear-button">
          Clear all
      </button>
      )
      }
    </>
  )
}