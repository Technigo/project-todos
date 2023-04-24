import React from 'react'
import styled from 'styled-components/macro';
import { TaskList } from './TaskList';
import { Header } from './Header';
import { AddNewTask } from './AddNewTask';

const MainWrapper = styled.div`
display: flex;
justify-content: center;
width: 80vw;
justify-content:space-between;
flex-direction:column;
`

const Layout = () => {
  return (
    <MainWrapper>
      <Header />
      <AddNewTask />
      <TaskList />
    </MainWrapper>
  )
}

export default Layout;