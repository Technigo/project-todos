/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckbox = () => {
    dispatch(todos.actions.toggleIfChecked(props.item.id))
  }

  const handleRemove = () => {
    dispatch(todos.actions.removeItem(props.item.id))
  }

  return (
    <li>
      {props.item.name}
      <label>
        <input type="checkbox" checked={props.item.ifChecked} onChange={handleCheckbox} />
      </label>

      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  )
}