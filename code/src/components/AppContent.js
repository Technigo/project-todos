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

// Styled mobile first

// Styling for border around content
export const Main = styled.main`
margin: 0 auto;
border: 2px solid black;
width: 100vw;
min-height: 100vh;
`;
