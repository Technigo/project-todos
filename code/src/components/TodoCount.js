import React from 'react'
import { useSelector } from 'react-redux'
import "./todoCount.css"

export const TodoCount = () => {
  const unfinishedTasks = useSelector(state => state.todos.tasks.filter(task => !task.isCompleted))
  const tasksTotal = unfinishedTasks.length;
  return (
    <p className="todo-count">{tasksTotal} {tasksTotal === 1 ? "task" : "tasks"}</p>
  )
}