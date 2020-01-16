import React from 'react'
import './taskbar.css'
import { useSelector } from 'react-redux'

export const TaskBar = () => {

  //Todo const for task count
  
  return (
    <div className="container">
      <p className="todo-text">TODO</p>
      <div className="amount"></div>
    </div>
  )
}