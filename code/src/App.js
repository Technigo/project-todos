import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'
import { ClearButton } from 'components/ClearButton'
import { TaskSummary } from 'components/TaskSummary'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskSummary />
      <AddTodo />
      <TodoList />
      <ClearButton />
    </Provider>
  )
} 