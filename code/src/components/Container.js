import React from 'react'

import  TodoHeader  from 'components/TodoHeader'
import  TodoList  from 'components/TodoList'
import Todoinput from 'components/TodoInput'

export const Container = () => {
  return (
    <main>
      <TodoHeader />
      <TodoList />
      <Todoinput />
    </main>
  )
}