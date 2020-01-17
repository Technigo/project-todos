import React from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCheckedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.item.id))
  }
  return (
    <li>
      <label>
        <input type="checkbox"
          checked={props.item.checkedTask}
          onChange={handleCheckboxClick} />
      </label>
      {props.item.name}
      <button
        type="button"
        onClick={handleRemoveButtonClick}>
        Remove
    </button>
    </li>
  )
}