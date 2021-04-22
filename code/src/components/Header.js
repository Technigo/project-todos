import React from 'react'

const date = new Date().toLocaleDateString()

const Header = () => {
  return (
    <div className='header-container'>
      <h1>My To Do List</h1>
      <p className='header-date'>{date}</p>
    </div>
  )
}

export default Header