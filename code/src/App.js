import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasks from './reducers/tasks'
import TaskList from './components/TaskList'
import { Header } from './components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskList />
    </Provider>
  )
}
