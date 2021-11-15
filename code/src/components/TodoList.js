import React from 'react';
import { TodoItem } from './TodoItem';

import './TodoList.css';

export const TodoList = () => {
  const todos = [
    { id: 1, item: 'Buy milk', done: false },
    { id: 2, item: 'Buy dark chocolate', done: false },
    { id: 3, item: 'Buy 1kg bananas', done: false },
    { id: 4, item: 'Get package from post office', done: false }
  ];
  return (
    <ul className="list-of-items">
      {todos.map((todo) => (
        <li id={todo.id} title={todo.item} done={todo.done} >{todo.item}</li>
      ))}
    </ul>
  );
};
