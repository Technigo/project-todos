import React from 'react'
import { useSelector } from 'react-redux'

export const TaskCounter = () => {
  const todos = useSelector(store => store.tasks.todos)

  return (
    <div>
    <div> todos done: {todos.filter((task) => task.complete === true).length} </div>
    <div> todos to do: {todos.filter((task) => task.complete === false).length} </div>
    </div>
  )
}