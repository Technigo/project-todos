import React from 'react'
import { useSelector } from 'react-redux'
import 'css/task.css'

export const Summary = () => {
  const todos = useSelector((state) => state.tasks)
  const completed = todos.filter((task) => task.complete)

  return (
    <>
      {todos.length !== 0 && (
        <div className="summary">
          <p>{completed.length} checked of {todos.length} total</p>
        </div>)}
    </>
  )
}