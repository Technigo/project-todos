import React from 'react'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'

export const ToDoScreen = () => {

  return(
    <>
      <Header />
      <TaskList />
      <AddTask />
    </>
  )
}