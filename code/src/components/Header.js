import React from 'react';
import moment from "moment";

export const Header =() =>{
  return (
    <header className="header">
      <h1 className="header-title">To-do</h1>
      <div className="header-sub-wrapper">
      <h2 className="header-day">{moment().format('dddd')}</h2>
      <h2 className="header-today-date">{moment().format('LL')}</h2>
      </div>
    </header>
  )
}