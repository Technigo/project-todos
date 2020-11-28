import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/';

import { Button } from 'lib/Button';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  background: #f4f4f4;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Tasks = styled.div`
  font-size: 16px;
  text-align: end;
`;

const Date = styled.div`
  font-size: 16px;
`;

export const Header = () => {
  const items = useSelector((store) => store.tasks.items);
  const numberOfItemsToDo = items.filter((item) => !item.completed);

  return (
    <HeaderContainer>
      <Title>Todo</Title>
      <Tasks>{numberOfItemsToDo.length} {numberOfItemsToDo.length < 2 ? 'task' : 'tasks'} left</Tasks>
      <Date>Today</Date>
      <Button>CLEAR ALL</Button>
    </HeaderContainer>
  )
} 