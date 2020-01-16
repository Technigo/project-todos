import React from 'react'
import { RemoveTask } from 'components/RemoveTask'
import { CompletedTask } from 'components/CompletedTask'
import 'css/task.css'

export const Task = ({ task }) => {
  console.log('task id', task.id)
  return (
    <>
      <div className="task">
        <p>{task.text}</p>
        <div className="buttons">
          <CompletedTask key={task.id} task={task} />
          <RemoveTask key={task.id} task={task} />
        </div>
      </div>
    </>

  )
}