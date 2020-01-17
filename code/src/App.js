import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'components/Header'
import { TaskInput } from 'components/TaskInput'
import { TaskList } from 'components/TaskList'

import { tasks } from 'reducers/tasks'

// Reducers
const reducer = combineReducers({
  tasks: tasks.reducer
})

// Store 
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskInput />
      <TaskList />
    </Provider>
  )
}
