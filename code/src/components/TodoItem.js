import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const TodoItem = (props) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState('')
  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  return (
    <li>
      <button className="remove" type="button" onClick={handleRemoveButtonClick}>
        X
      </button>
      <label className="container">
        <input
          className="check-box"
          type="checkbox"
          value={checked}
          onClick={setChecked} />
        {/* </input> */}
        {/* Just nu gör setChecked ingenting! */}
        <span className="checkmark"></span>
        {props.item.name}
      </label>
    </li>
  )
}