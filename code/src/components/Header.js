import React from 'react'
import { DateTimeNow } from './DateTimeNow.js'
import { useSelector } from 'react-redux'
import header from './header.css'

export const Header = () => {
  const todos = useSelector(state => state.todos.todos)

  return (
    <section className="header">
      <h1 className="header-title">Today</h1>
      <DateTimeNow />
    </section>
  )
}