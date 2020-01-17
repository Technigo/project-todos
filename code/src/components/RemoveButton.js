import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import "./removebuttons.css"



export const RemoveButton = (props) => {
  const dispatch = useDispatch()

  const handleRemoveTask = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  return (

    <button className="remove-task-btn" onClick={() => { handleRemoveTask(props.task.id) }}>
      <span className="remove-icon" role="button" aria-label="remove">-</span>
    </button>
  )
}
