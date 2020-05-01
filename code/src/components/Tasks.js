import React from 'react'
import { AddTask } from './AddTask'
import { ClearTasks } from './ClearTasks'
import { TaskList } from './TaskList'
import { Container, TaskContainer } from '../styles/Container'

export const Tasks = () => {

  return (
    <>
      <Container>
        <AddTask />
        <TaskContainer>
          <TaskList />
          <ClearTasks />
        </TaskContainer>
      </Container>
    </>
  )
}
