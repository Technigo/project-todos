import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Title, SpanText } from '../lib/Text';

const Container = styled.header`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <SpanText>{allTodos.length} todos</SpanText>
      <SpanText>
        {leftTodos.length} todo{leftTodos.length === 1 ? '' : 's'} left
      </SpanText>
      <Button onClick={handleClearAll}>Clear all</Button>
    </Container>
  );
};
