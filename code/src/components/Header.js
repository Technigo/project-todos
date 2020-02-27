import React from 'react'
import moment from 'moment'
import './header.css'
import { TodoCount } from './TodoCount'

export const Header = () => {
  // const moment = require('moment');

  return (
    <header>
      <div className="today">
        <h1>Todo</h1>
        <p>{moment().format('MMMM Do, YYYY')}</p>
      </div>
      <TodoCount />
    </header>
  )
}