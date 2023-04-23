import React from 'react';
import AddTask from './AddTask';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-h1">My to-do list</h1>
      <AddTask />
    </header>
  )
}

export default Header;