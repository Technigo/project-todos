import React from 'react'
import "./taskList.css"

export const TaskList = () => {
  return (
    <ul className="task-list">
      <li className="task-item task-completed"><button type="button" className="toggle-status-button">✔️<span className="sr-only">Done</span></button> This is a task</li>
      <li className="task-item task-completed"><button type="button" className="toggle-status-button">✔️<span className="sr-only">Done</span></button>  This is another task</li>
      <li className="task-item task-todo"><button type="button" className="toggle-status-button">❌<span className="sr-only">Todo</span></button>  This is a third task</li>
    </ul>
  )
}