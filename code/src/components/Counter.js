import React from "react"
import { useSelector } from "react-redux"

export const Counter = () => {

  const allTasks = useSelector(store => store.todoTasks.allTodoTasks).length

  return (
    <div>
      <p>Completed: of {allTasks}</p>
    </div>
  )
}