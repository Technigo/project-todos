import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'
import 'css/todo-list.css'

export const ToDoList = () => {
  const allTasks = useSelector((store) => (store.tasks))

  return (
    <>
      <h1>Todo List<span role="img" aria-label="Thinking cloud">  💬</span></h1>
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      {allTasks.length === 0
    && (
      <div className="empty-list">
        <p>Time to get things done....<span role="img" aria-label="Writing pen">✍</span></p>
      </div>
    )}
    </>
  )
}