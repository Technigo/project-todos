import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Title, Subtitle } from 'library/Text'

export const TodoSummary = () => {
  const items = useSelector((store) => store.todos.items)
  const completedItems = items.filter((item) => item.complete)
  
  //What is this referring to?? (from Jennies lecture):
  //const [showTodoList, setShowTodoList] = useState(false)

  if (items.length === 0) {
    return ( 
    <HeaderContainer> 
      <Title>No todos added yet! Add todos below:</Title>
    </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <Title>On your todo-list today, you have {items.length} todo{items.length > 1 ? 's.' : '.'}</Title>
      {completedItems.length === items.length 
      ? <Subtitle>Well done, you have completed all tasks for today!</Subtitle>
      : <Subtitle>You have completed {completedItems.length} todo{completedItems.length === 1 ? '.' : 's.'}
      {' '}{items.length - completedItems.length} more to go!</Subtitle>
      }
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 85vw;
  max-width: 1000px;
  // height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(3, 77, 136, .6);
  margin-top: 5vh;
  margin-bottom: 3vh;
  border-radius: 10px;
`;