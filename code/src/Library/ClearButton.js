import React from "react"
import { useDispatch } from "react-redux"

import { todo } from "../Reducers/todo"

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      className="clear-button"
      onClick={() => {
        dispatch(todo.actions.removeAll())
      }}
    >
      <span className="clearbutton-before">Remove All</span>
      <span className="clearbutton-after">Are you sure?</span>
    </button>
  )
}