import React from 'react'

import UncompletedTodosCount from './UncompletedTodosCount'

const Header = () => {
  return (
    <section className="header">
      <h1>Today's to do's!</h1>
      <UncompletedTodosCount />
    </section>
  )
}

export default Header
