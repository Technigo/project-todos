import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../index.css'
import todos from '../reducers/todos'


const Footer = (id) => {
  const dispatch = useDispatch()
  const tasks = useSelector((store) => store.todos.tasks)

  const tasksDone = tasks.filter(task => task.isComplete).length
   
  const onDeleteAll = () => {
    dispatch(todos.actions.deleteTodo(id))
  }

    return (
    <div className="footer-wrapper"> 
      <p>{tasksDone}/{tasks.length} tasks is done</p>
      <button 
        className="delete-button"
        onClick={onDeleteAll}
      >
      CLEAR ALL
      </button>
    </div>
  )
}

export default Footer