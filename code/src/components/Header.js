import React from 'react'
import { useSelector } from "react-redux"

import moment from "moment"

import './Header.css'

export const Header = () => {
  const items = useSelector((state) => state.tasks.items)

  const completed = items.filter(item => item.checkedTask)

  return(
    <header>
        <h1> TO-DO:s 
          <p className='todo-of-p'>of</p>
        </h1>
      <p className='current-date-p'>{moment().format('MMMM Do')}</p>
      <p className='completed-p'>Completed {completed.length} out of {items.length}</p>
      <button>clear all</button>
    </header>
  )
}