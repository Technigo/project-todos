/* eslint-disable linebreak-style */
import React from 'react';
import { AddTask } from './AddTask';
import { TodoCounter } from './TodoCounter';

export const Header = () => {
  return (
    <div className="header-container">
      <h1>To do List</h1>
      <AddTask />
      <TodoCounter />
    </div>
  )
}