import React from 'react'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  const handleCheckToggle = (event) => {
    dispatch(
      tasklist.actions.toggleCheck(id)
    )
  }

  const handleRemove = () => {
    dispatch(
      tasklist.actions.removeToDo(id)
    )
  }

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={complete ? 'checked' : ''}
          onChange={handleCheckToggle}>
        </input>
        <p>{text}</p>
        <a onClick={handleRemove}>x</a>
      </label>
    </div>
  )
}