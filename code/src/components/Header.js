import React from 'react';
import { useDispatch } from 'react-redux';

import TodayDate from './TodayDate';
import TodoSummary from './TodoSummary';
import { todos } from '../reducers/todos';
import { RoundButton } from '../lib/Button';
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
      {/* <RoundButton
      onClick = {() => handleClick()}
      type="button" 
      className="create-todo-button"
      > */}

      {/* hur kan jag tabba till denna? */}
      <PlusIcon src="../assets/plus-icon.svg" alt="plus icon" role="button" onClick = {() => handleClick()}/> 
      <TodoSummary /> 
    </HeaderContainer>
  )
}
export default Header;

const HeaderContainer = styled.header `
  height: 40vh;
  background-image: linear-gradient(25deg, #003443, #0e645a, #119971, #00d288); 
  display: grid;
  align-content: space-evenly;
  justify-content: center;
  text-align: center;
`
