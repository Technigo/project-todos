import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { TodoItem } from './TodoItem';

export const TodoList = () => {
  // Fetch all todos from the store
  const allTodos = useSelector((state) => state.todos.items);

  return (
    <div className="todos">
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
