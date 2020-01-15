import React from 'react'


export const TaskList = ({ task }) => {

  return (
    <div className="tasks-list-container">
      <div className="added-tasks-container">
        <div className="added-tasks" aria-label={task.text}>{task.text}</div>
      </div>
    </div >
  )
}
