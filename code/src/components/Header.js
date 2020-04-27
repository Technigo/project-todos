import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import '../styling/header.css'

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