import React from 'react'
import { AddTask } from './AddTask'
import { ClearTasks } from './ClearTasks'
import { TaskList } from './TaskList'
import { TasksContainer, TaskContainer } from '../styles/Container'

export const Tasks = () => {

  return (
    <>
      <TasksContainer>
        <AddTask />
        <TaskContainer>
          <TaskList />
          <ClearTasks />
        </TaskContainer>
      </TasksContainer>
    </>
  )
}
