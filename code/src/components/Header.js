import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-family: 'Abril Fatface', cursive;
  line-height: 120%;
  color: white;
  font-size: 72px;
  margin-bottom: 2px;
`;

const StyledP = styled.p`
  font-family: 'Montserrat';
  line-height: 120%;
  color: white;
  font-size: 18px;
`;

const Header = () => {
  const todoList = useSelector((store) => store.tasks.items);
  console.log('todoList', todoList)
  console.log('todoList.length', todoList.length)
  return (
    <>
      <div className="bgtest" />
      <div className="Header">
        <StyledHeadline>the todos.</StyledHeadline>
        <StyledP>{todoList.length} in the list currently</StyledP>
        <StyledP>x tasks are still not done</StyledP>
      </div>
    </>
  );
}

export default Header;