import React from 'react'
import { useSelector } from 'react-redux'
import { todoList } from 'reducers/todoList'
import "./todoCount.css"

export const TodoCount = () => {
  const unfinishedTasks = useSelector(state => state.todoList.tasks.filter(task => !task.isCompleted))
  const tasksTotal = unfinishedTasks.length;
  return (
    <p className="todo-count">{tasksTotal} {tasksTotal === 1 ? "task" : "tasks"}</p>
  )
}