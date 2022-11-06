import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import TaskList from './TaskList'
import AddTask from './AddTask'
import DeleteAllBtn from './DeleteAllBtn'

const AppContent = () => {
  return (
    <Main>
      <Header />
      <TaskList />
      <AddTask />
      <DeleteAllBtn />
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

@media (min-width: 600px) {

  width: 400px;
    height: 700px;
    min-height: 600px;
    margin-top: 5%;
    border-radius: 30px;
    overflow: scroll;
     }
`;
