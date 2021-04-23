import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from './reducers/tasks'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


const reducer =combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskForm />
      <TaskList />
    </Provider>
  )
}
