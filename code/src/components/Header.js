import React from 'react';
import { useSelector } from 'react-redux';
// import todoSlice from 'reducers/todoSlice';

import './Header.css';

export const Header = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);

  return (
    <header className="myheader">
      <h1>To-do-list</h1>
      <p>This is a to-do list. Enter what you need to do and check it off once it's finished!</p>
      <p className="todo-count">
       {todos.length} left to do
      </p>
    </header>
  );
};
