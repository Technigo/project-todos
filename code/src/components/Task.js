import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'

export const Task = ({ taskData }) => {
  const dispatch = useDispatch()
  return (
    <div>{taskData.text}

      <button className="deleteItem" onClick={() => dispatch(tasks.actions.deleteItem(taskData.id))}>
        Delete task
    </button>

    </div>
  )
}