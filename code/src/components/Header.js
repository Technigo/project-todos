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
  height: 15vh;

  @media (min-width: 768px) {
    padding: 0.5em 3em;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 50px;
    margin: 0;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 60px;
    }
  }
`;

const StyledHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 3px 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const StyledHeaderText = styled.p`
  font-size: 16px;
  margin: 3px 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Header = () => {
  const todoListItems = useSelector(
    (store) => store.todos.todoListItems.length
  );

  return (
    <StyledHeader>
      <div className='header-left'>
        <h1>ToDo</h1>
        <StyledHeaderText>{moment().format('LL')}</StyledHeaderText>
      </div>
      <StyledHeaderRight>{todoListItems} tasks</StyledHeaderRight>
    </StyledHeader>
  );
};

export default Header;
