import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import TodaysDate from './TodaysDate';
import { Button } from '../library/Button';
import { Title } from '../library/Text';
import TodoSummary from './TodoSummary';

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.goToAddTodo());
  };
  return (
    <HeaderContainer>
      <Title>Do it</Title>
      <Title>tomorrow</Title>
      <TodaysDate />
      <Button onClick={() => handleClick()} type="button">
        +
      </Button>
      <TodoSummary />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 35vh;
  background-image: linear-gradient(138deg, #352189, #443da6, #5259c4, #6075e3);
`;
