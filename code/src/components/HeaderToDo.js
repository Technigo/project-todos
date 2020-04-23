import React from 'react'
import styled from 'styled-components'
import { ToDoSummary } from './ToDoSummary'   
import { HeaderContainer, Title } from '../styledComponents/Header'
import { StyledLink } from 'styledComponents/StyledLink'

const HeaderRight = styled.section`
  display: flex;
  flex-direction: column;
`

export const HeaderToDo = () => {

  return (  
    <HeaderContainer>
      <Title>Get Started!</Title>
      <HeaderRight>
        <StyledLink to="/shopping">Shopping List ➜	</StyledLink>
        <ToDoSummary />
      </HeaderRight>
    
    </HeaderContainer>
    
  )
}