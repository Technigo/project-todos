import React from 'react'

import '../index.css'
import TodoForm from './TodoForm'


const Header = () => {

  return (
    <header className="header-wrapper">
      <h1 className="title">To-Do List</h1>
      <TodoForm />
    </header>
  )
}

export default Header