import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const amountTasks = useSelector((store) => store.todos.items.length)
  return (
    <header>
      <h1>
        My Task <span className='amount-tasks'>{amountTasks}</span>
      </h1>
    </header>
  )
}

export default Header
