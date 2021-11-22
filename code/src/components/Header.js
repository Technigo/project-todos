import React from 'react';
import { useSelector } from 'react-redux';


import './Header.css';

export const Header = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);

  return (
    <header className="header">
      <h1>To-do List</h1>
      
      <p className="todo-count">
      {todos.length} left
      </p>
    </header>
  );
};