import React from 'react'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'
import { CustomCheckbox } from './CustomCheckbox'

import './style/Task.css'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  const handleCheckToggle = () => {
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
      <label className='task'>
        <div className='input-and-task'>
          <CustomCheckbox 
            isChecked={complete} 
            onChangeHandler={handleCheckToggle} />
          <p className='text'>{text}</p>
        </div>
        <button className='x-button' onClick={handleRemove}>x</button>
      </label>
    </div>
  )
}