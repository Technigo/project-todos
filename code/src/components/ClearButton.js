import React from "react"
import { useDispatch } from "react-redux"

import { tasks } from "reducers/tasks"

export const ClearButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(tasks.actions.removeTask())} >Clear all</button>
  )
}