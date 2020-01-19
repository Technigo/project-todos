import React from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"
import "./clearbutton.css"


export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button type="button"
      onClick={() => dispatch(tasks.actions.removeAll())}
      className="clear-all-button">
      Clear all
      </button>
  )

}