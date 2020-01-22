import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/list.js'

export const Header = () => {
  const dispatch = useDispatch()
  const numberOfTasks = useSelector((state) => state.todos.tasks.length)
  
  return (
    <header>
        <h1 className="left">Todo all</h1>
        <p className="right">{numberOfTasks}</p>
        <p className="left">Date here</p>
        <button 
          className="right"
          onClick={() => dispatch(todos.actions.clearAll())}>Clear all</button>
    </header>
  )
}