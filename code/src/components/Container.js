import React from 'react'

import Header  from 'components/Header'
import TodoList  from 'components/TodoList'
import Input from 'components/Input'

export const Container = () => {
  return (
    <main>
      <Header />
      <TodoList />
      <Input />
    </main>
  )
}