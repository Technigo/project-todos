import React from 'react'

import { Header } from './Header'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { ClearAllButton } from './ClearAllButton'
import { MainContainer, AppContainer } from './styled/todoscreen'

export const TodoScreen = () => {
  return (
    <MainContainer>
      <AppContainer>
        <Header />
        <TaskList />
        <hr/>
        <AddTask />
        <ClearAllButton />
      </AppContainer>
    </MainContainer>
  )
}