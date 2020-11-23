import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Subtitle } from '../lib/Text';

const Container = styled.footer`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
`;

export const FilterTodo = () => {
  const dispatch = useDispatch();

  //   const handleShowAll = () => {
  //     dispatch(todos.actions.showAll());
  //   };

  //   const handleShowActive = () => {
  //     dispatch(todos.actions.showActive());
  //   };

  //   const handleShowCompleted = () => {
  //     dispatch(todos.actions.showCompleted());
  //   };

  return (
    <Container>
      <Subtitle>Show</Subtitle>
      {/* <Button onClick={handleShowAll}>All</Button>
      <Button onClick={handleShowActive}>Active</Button>
      <Button onClick={handleShowCompleted}>Completed</Button> */}
      <Button width="120px">All</Button>
      <Button width="120px">Active</Button>
      <Button width="120px">Completed</Button>
    </Container>
  );
};
