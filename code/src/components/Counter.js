import React from "react"
import { useSelector } from "react-redux"

export const Counter = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const totalCompletedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <p>{totalCompletedTasks}/{totalTasks} tasks completed</p>
  )
}