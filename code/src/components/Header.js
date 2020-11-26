import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import moment from 'moment';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Title, Paragraf } from '../lib/Text';

const Container = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #e8e8e8;
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = () => {
  // Fetch all todos from the store
  const allTodos = useSelector((state) => state.todos.items);
  const leftTodos = allTodos.filter((todo) => !todo.completed);

  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(todos.actions.clearAll());
  };

  return (
    <Container>
      <WrapperTitle>
        <Title>My Todos</Title>
        <Paragraf>{moment().format('MMM Do ')}</Paragraf>
      </WrapperTitle>
      <WrapperSummary>
        <Paragraf>
          {leftTodos.length}/{allTodos.length} todo
          {leftTodos.length <= 1 ? '' : 's'} left
        </Paragraf>
        <Button onClick={handleClearAll}>Clear all</Button>
      </WrapperSummary>
    </Container>
  );
};
