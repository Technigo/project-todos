import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import "./Task.css"

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
      <label>
        <input
          type="checkbox"
          checked={props.task.complete}
          onChange={handleCheckboxClick}
        />
        <span className="Checkbox" ariaLabel="checkbox" />
        {props.task.text}
      </label>
      <div className="btn-container">
        <button class="btn-submit"
          onClick={handleRemoveClick}
        >
          <span>Remove</span>
        </button>
      </div>
      <div className="time">{props.task.timeCreated}</div>
    </li>
  )
}