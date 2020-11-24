import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';  
import TodayDate from './TodayDate';
import TodoSummary from './TodoSummary';
import { todos } from '../reducers/todos';
import { PlusIcon } from '../lib/Image';
import { Title } from '../lib/Text';
import styled from 'styled-components';

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(todos.actions.createTodo())
  }

  return (
    <HeaderContainer>
      <Title>Structure your life, please</Title>
      <TodayDate />

      {/* hur kan jag tabba till denna? */}
      <Link to={'/create'}>
        <PlusIcon src="../assets/plus-icon.svg" alt="plus icon" role="button" onClick = {() => handleClick()}/> 
      </Link>
      <TodoSummary /> 
    </HeaderContainer>
  )
}
export default Header;

const HeaderContainer = styled.header `
  height: 40vh;
  //background-image: linear-gradient(25deg, #590015, #793935, #98685a, #b49881);
  background-image: linear-gradient(180deg, #05324b, #3d5f6b, #6c908c, #9cc5ae);
  display: grid;
  align-content: space-evenly;
  justify-content: center;
  text-align: center;
`
