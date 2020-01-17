import React from 'react'
import { RemoveTask } from 'components/RemoveTask'
import { CompletedTask } from 'components/CompletedTask'
import 'css/task.css'

export const Task = ({ task }) => {
  return (
    <>
      <div className="task">
        <CompletedTask key={task.id} task={task} />
        <p>{task.text}</p>
        <div className="buttons">
          <RemoveTask key={task.id} task={task} />
        </div>
      </div>
    </>

  )
}