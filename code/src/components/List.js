import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './List.css'
import { InputListItem } from './InputListItem.js'
import { todos } from '../reducers/list.js'

export const List = () => {
  
  const tasks = useSelector((state) => state.todos.tasks)
  const dispatch = useDispatch()
  const handleCompleted = (id) => {
    dispatch(todos.actions.updateCompleted(id))
  }

  return (
    <main>
      <ul>
        <InputListItem />
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              id={task.id}
              type="checkbox" 
              className="unchecked"
              onClick={() => handleCompleted(task.id)}
              value={task.completed}
            />
            <label htmlFor={task.id} className="taskname">
              <span></span>
              <p>{task.name}</p>
            </label>
          </li>
        ))}
      </ul>
    </main>
  )
}