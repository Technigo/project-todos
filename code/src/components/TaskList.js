import React from 'react'
import { useSelector } from 'react-redux'
import { todoList } from 'reducers/todoList'
import "./taskList.css"

export const TaskList = () => {
  const allTasks = useSelector(state => state.todoList.tasks)
  console.log(allTasks)
  return (
    <ul className="task-list">
      {allTasks.map(task => (
        task.isCompleted ?
          (<li className="task-item task-completed">
            <button type="button" className="toggle-status-button">✔️
            <span className="sr-only">Done</span>
            </button>
            {task.todoText}
          </li>)
          :
          (<li className="task-item task-todo">
            <button type="button" className="toggle-status-button">❌
            <span className="sr-only">Todo</span>
            </button>
            {task.todoText}
          </li>)
      ))}
      <li className="task-item task-completed"><button type="button" className="toggle-status-button">✔️<span className="sr-only">Done</span></button> This is a task</li>
      <li className="task-item task-completed"><button type="button" className="toggle-status-button">✔️<span className="sr-only">Done</span></button>  This is another task</li>
      <li className="task-item task-todo"><button type="button" className="toggle-status-button">❌<span className="sr-only">Todo</span></button>  This is a third task</li>
    </ul >
  )
}