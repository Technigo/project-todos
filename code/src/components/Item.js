import React from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"
import moment from "moment"

import "./item.css"

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCheckedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.item.id))
  }
  return (
    <li className="checkbox-list-items">
      <div className="checkbox-and-item-name">
        <label className="checkbox-label">

          <input type="checkbox"
            checked={props.item.checkedTask}
            onChange={handleCheckboxClick} />
          <span className="fakeCheckbox" role="img" aria-label="checkbox"></span>
        </label>
        {props.item.name}

      </div>
      <div className="date-and-remove-button">
        <button
          type="button"
          onClick={handleRemoveButtonClick}
          className="remove-task-button">
          <span role="img" aria-label="remove-button">❌</span>
        </button>
        <p className="time-tag">
          Added {moment(props.item.createdAt).fromNow()}
        </p>
      </div>
    </li>
  )
}