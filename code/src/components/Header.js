import React from 'react'
import '../styling/header.css'
import moment from 'moment'
import { useSelector } from 'react-redux'


// Todo title
// Date of today 
// How many tasks in total 
// Button to clear all tasks 

export const Header = () => {
  const list = useSelector(store => store.todos.list)

  const task = list.items.length - list.items.filter(item => item.done).length

  return (
    <header>
      <h1>My Day</h1>
      <div className="text-wrap">
        <p>{moment().format('dddd Do MMM')}</p>
        <p className="tasks">{task} Tasks</p>
      </div>
    </header>
  )
}