import React from 'react';
import { useSelector } from 'react-redux';
import { VisibilityFilter } from 'reducers/visibilityFilter';
import styled from 'styled-components';

import { AddTodoForm } from './AddTodoForm';
import { TodoItem } from './TodoItem';

const Container = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilter.ShowActive:
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

export const TodoList = () => {
  // Fetch all todos from the store in combination with filter
  const allTodos = useSelector((state) =>
    getVisibleTodos(state.todos.items, state.visibilityFilter)
  );

  return (
    <Container>
      <AddTodoForm />
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};
