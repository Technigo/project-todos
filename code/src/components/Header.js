import React from 'react'
import moment from 'moment'

const time = moment().format('MMMM Do')

const Header = () => {
  return (
    <article className="header">
      <h1>Hej hej</h1>
      <h3>{time}</h3>
    </article>
  )
}
export default Header
