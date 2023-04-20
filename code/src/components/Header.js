import React from 'react';
import AddTask from './AddTask';

const Header = () => {
  return (
    <section className="top-container">
      <header>
        <h1 className="header-h1">My to-do list</h1>
      </header>
      <AddTask />
    </section>
  )
}

export default Header;