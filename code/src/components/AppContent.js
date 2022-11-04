import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import TaskList from './TaskList'
import AddTask from './AddTask'

const AppContent = () => {
  return (
    <Main>
      <Header />
      <TaskList />
      <AddTask />
    </Main>
  )
}

export default AppContent

export const Main = styled.main`
margin: 0 auto;
border: 2px solid black;
`;
