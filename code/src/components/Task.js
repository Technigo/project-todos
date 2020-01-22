import React from 'react'
import { useDispatch } from 'react-redux'
import { Tasks } from 'reducers/tasks'

export const Task = (props) => {


  const handleCheckboxClick = () => {
    useDispatch(Tasks.actions.toggleCompleted(props.task.id))
  }

  const handleRemoveClick = () => {
    useDispatch(Tasks.actions.removeItem(props.task.id))
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.task.complete}
          onChange={handleCheckboxClick}
        />
        <span className="fakeCheckbox" ariaLabel="checkbox" />
        {props.task.text}
      </label>

      <button class="remove-button" type="button" onClick={handleRemoveClick}>
        Remove
      </button>

      <div class="time-created">{props.task.timeCreated}</div>
    </li>
  )
}