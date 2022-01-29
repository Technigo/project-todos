import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

//Styled components
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  flex-direction: column;
`;
const TodoTitle = styled.h1`
  font-family: 'Reenie Beanie', cursive;
  font-size: 50px;
  color: white;
`;

const CompletedTask = styled.p`
  font-family: 'Poiret One', cursive;
  font-weight: 660;
  color: white;
`;

const Date = styled.p`
  font-family: 'Poiret One', cursive;
  font-weight: 660;
  color: white;
`;

//component showing the app's header
const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const completedTasks = items.filter((items) => items.isComplete);

  return (
    <>
      <StyledHeader>
        <TodoTitle>To-do Today: {items.length} </TodoTitle>
        <Date>{moment().format('LL')}</Date>{' '}
        <CompletedTask> Completed Tasks: {completedTasks.length}</CompletedTask>
      </StyledHeader>
    </>
  );
};

export default Header;
