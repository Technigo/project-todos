import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Header = () => {
  // for summery of number completed tasks
  const items = useSelector((store) => store.todos.items)
  const completedTasks = items.filter((item) => !item.isDone)

  return (
    <HeaderWrapper>
      <ToDoCounterDiv>
        <Count>You have <CountSpan>{completedTasks.length}</CountSpan> to-do:s</Count>
      </ToDoCounterDiv>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f6a9bd;
  height: 15vh;
  margin-top: 0px;
  position: relative;
`
const ToDoCounterDiv = styled.div`
  background-color: blue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute; 
  right: 5vw;
  bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Count = styled.p`
  color: white;
  font-family: 'Baloo 2', cursive;
  padding: 7px;
`
const CountSpan = styled.span`
  font-weight: 700;
  `