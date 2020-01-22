import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './list.css'

export const List = () => {
  const tasks = useSelector((state) => state.tasks)
  return (
    <main>
      <ul>
        <li>
          <input type="radio" className="checkbox" />
          <div className="taskname">Task 1</div>
        </li>
      </ul>
    </main>
  )
}