import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/list.js'
import './Header.css'

export const Header = () => {
  
  const dispatch = useDispatch()
  const numberOfTasks = useSelector((state) => state.todos.tasks.length)

  return (
    <header>
        <h1 className="left">Todos</h1>
        <p className="right">{numberOfTasks}</p>
        <p className="left"></p>
        <div className="right">
          <button 
            className=""
            onClick={() => dispatch(todos.actions.clearAll())}
          >
            Clear
          </button>
        </div>

    </header>
  )
}