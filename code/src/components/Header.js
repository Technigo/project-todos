import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/';

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
  // font-size: 16px;
  text-align: end;
`;

const Date = styled.div`
  // font-size: 16px;
`;

const ClearButton = styled.button`
  padding: 6px 12px;
  justify-self: end;
  width: fit-content;
  color: ${(props) => props.color || 'inherit'};
  background: ${(props) => props.background || 'none'};
  border-radius: 6px;
  border: none;

  &:hover {
  background: black;
  color: white;
  }
`;

export const Header = () => {
  const items = useSelector((store) => store.tasks.items);
  const numberOfItemsToDo = items.filter((item) => !item.completed);

  return (
    <HeaderContainer>
      <Title>Todo</Title>
      <Tasks>{numberOfItemsToDo.length}/{items.length} {numberOfItemsToDo.length < 2 ? 'task' : 'tasks'} left</Tasks>
      <Date>Today</Date>
      <ClearButton background='#6979f8' color='white'>CLEAR DONE</ClearButton>
    </HeaderContainer>
  )
} 