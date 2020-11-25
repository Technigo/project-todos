import React from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'
import { Checkbox } from './Checkbox'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  const handleCheckToggle = () => {
    dispatch(tasklist.actions.toggleCheck(id))
  }

  const handleRemove = () => {
    dispatch(tasklist.actions.removeTodo(id))
  }

  return (
    <div>
      <label>
        <div>
          <Checkbox 
            isChecked={complete}
            onChangeHandler={handleCheckToggle}
          />
          <p>{text}</p>
        </div>
        <button onClick={handleRemove}>X</button>
      </label>
    </div>
  )
}