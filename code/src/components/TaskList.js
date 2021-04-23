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

            <div className='checkbox'>
              <input
                type='checkbox'
                checked={task.isComplete}
                onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}      
              />            
            </div>

          {/* <label for='text'><p>{task.text}</p></label> */}
          <div className='task-details'>
            <p>{task.text}</p>
          </div>

          <button onClick={() => dispatch(tasks.actions.deleteTask(task.id))} className='btn-remove'>🗑️</button>

        </div>
      ))}
      <button onClick={() => dispatch(tasks.actions.completeAll())} className='btn-all-done'>Mark all as done</button>
      <button onClick={() => dispatch(tasks.actions.deleteAll())} className='btn-all-delete'>Remove all todos</button>

    </div>
  )
}