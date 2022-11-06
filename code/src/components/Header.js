/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import DeleteAllTask from './DeleteAllTasks';

const Header = () => {
  const items = useSelector((store) => store.todos.items)
  const completedTasks = items.filter((item) => !item.isDone)

  return (
    <HeaderWrapper>
      <ToDoCounterDiv>
        <Count>
          {completedTasks.length > 0 && <CountSpan>You have {completedTasks.length} to-do:s</CountSpan>}
          {completedTasks.length === 0 && <CountSpan>You are up to date!</CountSpan>}
        </Count>
      </ToDoCounterDiv>
      <DeleteAllTask />
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: rgb(255, 69, 117);
  height: 10vh;
  margin-top: 0px;
`
const ToDoCounterDiv = styled.div`
  background-color: blue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2vh;
  left: 2vw;
  text-align: center;
  
  @media (min-width: 668px) and (max-width: 1024px) {
  left: 17vw;
} 
  @media (min-width: 1025px) {
  left: 22vw;
} 
`
const Count = styled.p`
  color: white;
  font-family: 'Indie Flower', cursive;
  padding: 10px;
`
const CountSpan = styled.span`
  font-weight: bold;
  `