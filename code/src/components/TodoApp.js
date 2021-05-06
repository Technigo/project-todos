import React from 'react'
import { useSelector } from 'react-redux'

import EmptyState from 'components/EmptyState'
import TodoList from 'components/TodoList'
import TodoAddNew from 'components/TodoAddNew'
import Header from 'components/Header'
import ProgressBar from 'components/ProgressBar'

const TodoApp = () => {
  const tasks = useSelector(store => store.todos.tasks)

  return (
    <>
    {tasks.length < 1
      ?
        <>
          <Header />
          <ProgressBar />
          <TodoAddNew />
          <EmptyState />
        </>
      :
        <>
          <Header />
          <ProgressBar />
          <TodoAddNew />
          <TodoList />
        </>  
    }
  </>
  )
}

export default TodoApp