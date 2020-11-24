import React from 'react'
import { useSelector } from 'react-redux'

const NumberOfTodos = () => {
  const todoItems = useSelector((store) => store.todolist)
  return (
    <div>
      {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"} to do
    </div>
  )
}
export default NumberOfTodos