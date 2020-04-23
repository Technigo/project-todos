import React from 'react'
import styled from 'styled-components'
import { ToDoSummary } from './ToDoSummary' 

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 16px;
`

const Title = styled.h1`
  font-size: 40px;
  margin: 16px;
`



export const Header = () => {

  return (  
    <HeaderContainer>
      <Title>Get Started!</Title>
      <ToDoSummary />
    </HeaderContainer>
    
  )
}