import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'


export const Task = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.complete(props.taskName.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.taskName.id))
  }

  return (
    <li>
      {props.taskName.tasks}
      <label>
        Todo
      <input
          type='checkbox'
          checked={props.taskName.complete}
          onChange={handleCheckboxClick} />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Finished
      </button>
    </li>
  )
}