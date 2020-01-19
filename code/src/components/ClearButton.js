import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'
import "./clearButton.css"

export const ClearButton = () => {

  const dispatch = useDispatch()
  const list = useSelector(state => state.todos.tasks)
  const emptyList = list.length === 0;

  return (
    <>
      {!emptyList && (
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