import React from 'react'
import styled from 'styled-components'
import AddTask from './AddTask'
import TaskList from './TaskList'

const StyledMain = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const MainContainer = styled.div`
  width: 320px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`

export const Main = () => {
  return (
    <StyledMain>
      <MainContainer>
        <AddTask />
        <TaskList />
      </MainContainer>
    </StyledMain>
  )
}
