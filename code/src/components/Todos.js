import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';

export const Todos = () => {
  const allTodos = useSelector(state => state.todos);

  return (
    <>
      <ul>
        {allTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
