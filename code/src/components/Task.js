import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()
  const task = useSelector((store) => (store.tasklist))

  const handleCheckToggle = (event) => {
    dispatch(
      tasklist.actions.toggleCheck(id)
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
      </label>
    </div>
  )
}