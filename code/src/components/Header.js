import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin: 0 20px 20px;
  color: #5c6f73;
  text-align: center;

  h1 {
    margin-top: 40px;
    color: #313e40;
    font-family: 'Caveat', cursive;
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }
`;

const Header = () => {
  const counter = useSelector((store) => store.todos.items);
  const completedToDo = counter.filter((item) => item.isComplete).length;
  const uncompletedToDo = counter.length;

  return (
    <HeaderContainer>
      <h1>My To Do List</h1>
      <p>
        {completedToDo} of {uncompletedToDo} tasks done
      </p>
    </HeaderContainer>
  );
};

export default Header;
