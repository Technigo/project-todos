import React from 'react'

import { Header } from './Header'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { ClearAllButton } from './ClearAllButton'

export const TodoScreen = () => {
  return (
    <div>
      <div>
        <Header />
        <TaskList />
        <AddTask />
        <ClearAllButton />
      </div>
    </div>
  )
}