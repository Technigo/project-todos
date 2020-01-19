import React from 'react'
import './taskbar.css'
import { useSelector } from 'react-redux'


export const TaskBar = () => {

 const moment = require('moment');

const quantity = useSelector((state) => state.todoList.items)
 
 const totalQuantity = quantity.length
  
  return (
<>
    {totalQuantity === 0 && (
      <div className="container">
       <p className="todo-text">TO DO</p>
        <p className="date-box">{moment().format('MMM Do YY')}</p>
      </div>
    )}
    {totalQuantity >= 1 && (
      <div className="container">
        <p className="todo-text">TO DO</p>
        <p className="date-box">{moment().format('MMM Do YY')}</p>
        <div className="amount">Tasks: {totalQuantity}</div>
      </div>
    )}
    <div className="amount"></div>
 </>
  )
}