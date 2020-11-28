import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/';
import moment from 'moment';

import { tasks } from 'reducers/tasks';

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
  color: white;
  background: #6979f8;
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
  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(tasks.actions.clearDone())
  };

  return (
    <HeaderContainer>
      <Title>Todo</Title>
      <Tasks>{numberOfItemsToDo.length}/{items.length} {numberOfItemsToDo.length < 2 ? 'task' : 'tasks'} left</Tasks>
      <Date>{moment().format('ll')}</Date>
      <ClearButton
        type='button'
        onClick={handleClearButtonClick}
      >
        CLEAR DONE
      </ClearButton>
    </HeaderContainer>
  )
} 