import React from 'react'
import moment from 'moment'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>To-do Today</h1>
        <span className="header-date">{moment().format('dddd Do MMM')}</span>
      </div>
    </div>
  )
}