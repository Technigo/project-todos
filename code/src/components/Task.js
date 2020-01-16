import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Task = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCompleted(props.task.id))
  }

  const handleRemoveClick = () => {
    dispatch(tasks.actions.removeItem(props.task.id))
  }

  return (
    <li>
      <button class="remove-button" type="button" onClick={handleRemoveClick}>
        -
      </button>

      {props.task.text}

      <label>
        <input 
          type="checkbox" 
          checked={props.task.complete} 
          onChange={handleCheckboxClick}
        />
      </label>

    </li>
  )
}