import React from 'react'
import { useSelector } from "react-redux"
import moment from "moment"

import { ClearButton } from './ClearButton'
import './Header.css'

export const Header = () => {
  const items = useSelector((state) => state.tasks.items)

  const completed = items.filter(item => item.checkedTask)

  return (
    <header>
      <h1 tabIndex='0'> TO-DO:s
          <p tabIndex='0' className='todo-of-p'>of</p>
      </h1>
      <p tabIndex='0' className='current-date-p'>{moment().format('MMMM Do')}</p>
      <p tabIndex='0' className='completed-p'>Completed {completed.length} / {items.length}</p>
      <ClearButton />
    </header>
  )
}