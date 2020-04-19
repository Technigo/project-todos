/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(ToDo.actions.toggleNeedsMore(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(ToDo.actions.removeItem(props.item.id))
  }

  return (
    <li>
      {props.item.name}

      <label>
         - Check!
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={handleCheckboxClick} />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}
