import React from'react'
import styled from 'styled-components'

import { Header } from './Header'
import TodoList from './TodoList'
import { TodoForm } from './TodoForm'

const MainWrapper = styled.main`
 background-color: #f38d6e;
 color:#5c5756;
 height: 100vh;
 width: 100wh;
 display: flex;
 flex-direction: column;
 align-items:center; 
`


export const Main = () => {
  return (

    <MainWrapper>
      <Header />
      <TodoList />
      <TodoForm />
    </MainWrapper>
    
  )
}