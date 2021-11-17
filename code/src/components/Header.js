import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #acbcc7;
  color: #fff;
  padding: 0.5em 1em;
  height: 13vh;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 3px 0;
`;

const StyledTodoHeader = styled.div`
  font-size: 50px;
`;

const StyledHeaderText = styled.p`
  font-size: 16px;
  margin: 3px 0;
`;

const Header = () => {
  const todoListItems = useSelector(
    (store) => store.todos.todoListItems.length
  );

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledTodoHeader>ToDo</StyledTodoHeader>
        <StyledHeaderText>{moment().format('LL')}</StyledHeaderText>
      </StyledHeaderLeft>
      <StyledHeaderRight>{todoListItems} tasks</StyledHeaderRight>
    </StyledHeader>
  );
};

export default Header;
