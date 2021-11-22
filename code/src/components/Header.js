import React from 'react';
import { useSelector } from 'react-redux';
// import todoSlice from 'reducers/todoSlice';

import './Header.css';

export const Header = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);

  return (
    <header className="header">
      <h1>To-do List</h1>
      {/* <p>To keep you from forgetting what you have to do</p> */}
      <p className="todo-count">
      {todos.length} left
      </p>
    </header>
  );
};