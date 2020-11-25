import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Tasks'

import moment from "moment"

import './TaskItems.css'

export const TaskItems = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCheckedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.item.id))
  }

  return (
    <li className='list-task'>
      <div className='checkbox-and-name'>
      <label className='checkbox-label'>
      <input
          type="checkbox"
          // || false fixes the issues of going from controlled to uncontrolled value
          // here https://github.com/facebook/react/issues/6779
          checked={props.item.checkedTask || false}
          onChange={handleCheckboxClick}
        />
        <span className="checkmark"></span>
      </label>
      <p tabIndex='0' className='task-name-p'>{props.item.todo}</p>
      </div>
      <div className='remove-and-date'>
        <button
        className='remove-task-button'
        type='button'
        onClick={handleRemoveButtonClick}>
          <span role ='img' aria-label = 'checked'>✔</span>
        </button>
        <p tabIndex='0' className='task-added-date'> Added: {moment(props.item.createdAt).calendar()}</p>
      </div>
    </li>
  )
}