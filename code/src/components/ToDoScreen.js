import React from 'react'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { ClearAllButton } from './ClearAllButton'

import './style/All.css'

export const ToDoScreen = () => {

  return (
    <main className='all'>
      <div className='content'>
        <Header />
        <TaskList />
        <AddTask />
        <ClearAllButton />
      </div>
    </main>
  )
}