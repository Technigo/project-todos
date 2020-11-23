import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AddTodoForm } from './AddTodoForm';
import { TodoItem } from './TodoItem';

const Container = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TodoList = () => {
  // Fetch all todos from the store
  const allTodos = useSelector((state) => state.todos.items);

  return (
    <Container>
      <AddTodoForm />
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};
