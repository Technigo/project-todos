import React from 'react'
import { ToDoSummary } from './ToDoSummary' 
import { HeaderContainer, Title } from '../styledComponents/Header'


export const HeaderToDo = () => {

  return (  
    <HeaderContainer>
      <Title>Get Started!</Title>
      <ToDoSummary />
    </HeaderContainer>
    
  )
}