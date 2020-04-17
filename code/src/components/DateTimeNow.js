import React from 'react'
import dateTimeNow from './dateTimeNow.css'

export let DateTimeNow = () => {
  let today = new Date();

  return <span className="header-date">{today.toDateString()}</span>
}

