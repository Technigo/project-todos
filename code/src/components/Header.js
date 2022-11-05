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
        <Count>You have <CountSpan>{completedTasks.length}</CountSpan> to-do:s</Count>
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
  
  @media (min-width: 668px) and (max-width: 1024px) {
  left: 10vw;
} 
  @media (min-width: 1025px) {
  left: 15vw;
} 
`
const Count = styled.p`
  color: white;
  font-family: 'Baloo 2', cursive;
  padding: 7px;
`
const CountSpan = styled.span`
  font-weight: 700;
  `