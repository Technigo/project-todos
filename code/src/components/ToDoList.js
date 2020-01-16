import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'
import 'css/todo-list.css'

export const ToDoList = () => {
  const allTasks = useSelector((store) => (store.tasks))

  return (
    <div className="todo-list">
      <h1>Todo List </h1>
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}