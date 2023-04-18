import React from 'react'
import { useSelector } from 'react-redux'

export const CheckBox = () => {
  const tasks = useSelector((store) => store.tasks)
  return (
    <label htmlFor="Is the task finished?">
      <input type="checkbox" checked={tasks.isDone} />
    </label>
  )
}