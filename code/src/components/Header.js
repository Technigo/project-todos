/* eslint-disable linebreak-style */
import React from 'react';
import { AddTask } from './AddTask';
import { TodoCounter } from './TodoCounter';

export const Header = () => {
  return (
    <div className="header-container">
      <h1>To do</h1>
      <div className="task-form-counter">
        <AddTask />
        <TodoCounter />
      </div>
    </div>
  )
}