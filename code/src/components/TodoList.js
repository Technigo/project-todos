import React from 'react';

import './TodoList.css';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

  return (
    <section className="list-of-items-container">
      <TodoItem />
    </section>
  );
};
