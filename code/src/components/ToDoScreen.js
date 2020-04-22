import React from 'react'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { ClearAllButton } from './ClearAllButton'

import './style/All.css'
import './style/Background.css'
import './style/AddTask.css'

export const ToDoScreen = () => {

  return (
    <main className='all'>
      <Header />
      <TaskList />
      <AddTask />
      <ClearAllButton />
    </main>
  )
}