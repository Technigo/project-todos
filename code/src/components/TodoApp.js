import React from 'react'
import styled from 'styled-components'

import { Background } from '../styling/GlobalStyles'

import AddTodoForm from './AddToDoForm'

const TodoApp = () => {
  return (
    <Background>
      <MainContainer>
        <AddTodoForm /> 
      </MainContainer>
    </Background>
  )
}

// Local styles
const MainContainer = styled.div`
  display: flex;
`;

export default TodoApp
