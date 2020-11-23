import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Title, Span } from '../lib/Text';

const Container = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
`;

export const Summary = () => {
  // Fetch all todos from the store
  const allTodos = useSelector((state) => state.todos.items);
  const leftTodos = allTodos.filter((todo) => !todo.completed);

  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(todos.actions.clearAll());
  };

  return (
    <Container>
      <Title>My Todo App</Title>
      <Span>{allTodos.length} todos</Span>
      <Span>
        {leftTodos.length} todo{leftTodos.length === 1 ? '' : 's'} left
      </Span>
      <Button onClick={handleClearAll}>Clear all</Button>
    </Container>
  );
};
