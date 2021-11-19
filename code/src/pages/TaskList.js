import React from 'react'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import ToDos from '../components/ToDos'
import AddTask from '../components/AddTask'
import CompletedToDos from '../components/CompletedToDos'

const StyledMain = styled.main `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
`

const TaskList = () => {
  return (
    <StyledMain>
      <Header />
      <div>
        <ToDos />
        <CompletedToDos />
      </div>
      <AddTask />
    </StyledMain>
  )
}

export default TaskList
