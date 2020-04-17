import React from 'react'
import { DateTimeNow } from './DateTimeNow.js'
import header from './header.css'

export const Header = () => {

  return (
    <section className="header">
      <h1 className="header-title">Today,</h1>
      <DateTimeNow />,
    </section>
  )
}