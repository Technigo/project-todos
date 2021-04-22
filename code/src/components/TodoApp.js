import React from 'react'
import styled from 'styled-components'

import { Background } from '../styling/GlobalStyles'

import Header from './components/Header'
import AddTodoForm from './components/AddToDoForm'

const TodoApp = () => {
  return (
    <Background>
    <MainContainer>
        <AddTodoForm /> 
    </MainContainer>
    </Background>
  )
}

const MainContainer = styled.container`
  display: flex;

`;

export default TodoApp
