import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import tasks from '../reducers/tasks'

export const TaskList = () => {

  const items = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  return (
    <div>
      {items.map(task => (
        <div key={task.id} className='task-item'>
          <input
            type='checkbox'
            checked={task.isComplete}
            onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
            id='text'
            className='checkbox'
          />
          {/* <label for='text'><p>{task.text}</p></label> */}
           <p>{task.text}</p>
          <button onClick={() => dispatch(tasks.actions.deleteTask(task.id))} className='btn-remove'>🗑️</button>
        </div>
      ))}
    </div>
  )
}