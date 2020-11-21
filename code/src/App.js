import React from 'react'

import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { TaskList } from 'components/TaskList'

export const App = () => {
  return (
    <>
      <Header />
      <Input />
      <TaskList />
    </>
  )
}
