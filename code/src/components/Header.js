import React from 'react'
import moment from 'moment'

const time = moment().format('DD MMMM YYYY, HH:mm')

const Header = () => {
  return (
    <article className="header">
      <h1>My Simple ToDo List!</h1>
      <h3>{time}</h3>
    </article>
  )
}
export default Header
