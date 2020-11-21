import React from 'react'
// import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Tasks'

export const TaskItems = (props) => {
  // const dispatch = useDispatch()

  return (
    <li>
      <div className='checkbox-and-name'>
      <label>
      <input
          type="checkbox"
          checked={props.item.checkedTask}
        />
      </label>
      <p>{props.item.todo}</p>
      </div>
      <div className='remove-things'>
      </div>
    </li>
  )

}