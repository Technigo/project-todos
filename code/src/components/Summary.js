import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const todos = useSelector((state) => state.tasks)
  const completed = todos.filter((task) => task.complete)

  return (
    <div className="total-score">
      <p>{completed.length} checked of {todos.length} total</p>
    </div>
  )
}