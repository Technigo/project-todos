import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import moment from 'moment'

export const Item = (props) => {
  const { id, name, dueDate, category, completed, startDate } = props.item
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(ToDo.actions.toggleCompleted(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(ToDo.actions.removeItem(id))
  }

  return (
    <li>
      {name}

      <label>
         - Check!
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxClick} />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>
      <span>ADDED: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> -> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
    </li>
  )
}
