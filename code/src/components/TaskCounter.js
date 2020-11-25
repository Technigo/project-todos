import React from 'react'
import { useSelector } from 'react-redux'

export const TaskCounter = () => {
  const todos = useSelector(store => store.tasks.todos)

  return (
    <div> todos to do: {todos.length} </div>
  )
}