import React from 'react'
import { TaskList } from './TaskList';
import { AddNewTask } from './AddNewTask';

export const Layout = () => {
  return (
    <>
      <TaskList />
      <AddNewTask />
    </>
  )
}