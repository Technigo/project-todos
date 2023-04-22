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
  max-width: 320px;
  margin: 50px auto;
  background-color: rgba(180, 180, 180, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(8, 7, 16, 0.6);
  padding: 30px 35px 50px 35px;
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
