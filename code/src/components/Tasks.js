import React from 'react'
import { AddTask } from './AddTask'
import { ClearTasks } from './ClearTasks'
import { TaskList } from './TaskList'

export const Tasks = () => {

  return (
    <>
      <AddTask />
      <TaskList />
      <ClearTasks />
    </>
  )
}
