import React from 'react'
import moment from 'moment'

export const Header = () => {
  const todaysDate = moment().format('dddd Do MMM')
  return (
    <header>
      <h1>Todo List</h1>
      <h4>{todaysDate}</h4>
    </header>
  )
}