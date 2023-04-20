import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-family: 'Abril Fatface', cursive;
  line-height: 120%;
  color: white;
  font-size: 72px;
  margin-bottom: 2px;

  @media (max-width: 560px) {
    font-size: 52px;
  }
`;

const StyledP = styled.p`
  font-family: 'Montserrat';
  line-height: 120%;
  color: white;
  font-size: 18px;
  margin-top: 25px;
  
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

const Header = () => {
  const todoList = useSelector((store) => store.tasks.items);
  console.log('todoList', todoList)
  // console.log('todoList.length', todoList.length)
  const filteredTodoList = todoList.filter((item) => item.isChecked === true)
  // console.log('filteredTodoList', filteredTodoList)
  // console.log('filteredTodoList.length', filteredTodoList.length)
  return (
    <>
      <div className="bgtest" />
      <div className="Header">
        <StyledHeadline>the todos.</StyledHeadline>
        <StyledP>{filteredTodoList.length}/{todoList.length} tasks complete</StyledP>
      </div>
    </>
  );
}

export default Header;

/*
      <div className="Header">
        <StyledHeadline>the todos.</StyledHeadline>
        <StyledP>{todoList.length} in the list currently</StyledP>
        <StyledP>x/{todoList.length} tasks complete</StyledP>
      </div>
      */