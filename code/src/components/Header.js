import React from "react";
import { useSelector } from "react-redux";
// import todoSlice from 'reducers/todoSlice';

import "./Header.css";

export const Header = () => {
  const todos = useSelector((state) => state.todoSlice.todoList);

  return (
    <header className="myheader">
      <h1>My Day in 3 minutes</h1>
      <p>In this app, you can summarize your day in 3 minutes</p>
      <p>Fill it out during the day or just before going to bed!</p>
      <p className="todo-count">{todos.length} items</p>
    </header>
  );
};
