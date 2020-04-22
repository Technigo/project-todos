import React from 'react'
import styled from 'styled-components'
import { ToDoSummary } from './ToDoSummary' 

const HeaderContainer = styled.section`
  background-color: lightgrey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
`



export const Header = () => {

  return (
    <HeaderContainer>
      <Title>Let's Go!</Title>
      <ToDoSummary />
    </HeaderContainer>
    
  )
}