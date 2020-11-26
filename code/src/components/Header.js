import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'; 
import { todos } from '../reducers/todos';
import styled from 'styled-components';
import TodayDate from './TodayDate';
import TodoSummary from './TodoSummary';
import { PlusIcon } from '../lib/Image';
import { Title } from '../lib/Text';

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.createTodo());
  };

  return (
    <HeaderContainer>
      <Title>Add a todo!</Title>
      <TodayDate />
        <Link to={'/create'}>
          <PlusIcon   
            src="../assets/plus-icon.svg" 
            alt="plus icon" 
            role="button" 
            onClick = {() => handleClick()}
          /> 
        </Link>
     <TodoSummary /> 
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header `
  height: 40vh;
  background-image: linear-gradient(180deg, #05324b, #3d5f6b, #6c908c, #9cc5ae);
  display: grid;
  align-content: space-evenly;
  justify-content: center;
  text-align: center;
`;
