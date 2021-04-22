import React from 'react'


import UncompletedTodosCount from './UncompletedTodosCount'

const Header = () => {
  return (
    <section className="header">
      <UncompletedTodosCount />
      <h1>Todolist!</h1>
    </section>
  )
}

export default Header