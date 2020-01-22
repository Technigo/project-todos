import React from 'react'
import { useSelector } from 'react-redux'
import './list.css'
import { InputListItem } from './InputListItem.js'

export const List = () => {
  
  const tasks = useSelector((state) => state.todos.tasks)

  return (
    <main>
      <ul>
        <InputListItem />
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" className="checkbox" />
            <div className="taskname">{task.name}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}