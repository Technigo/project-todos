import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'

import { tasks } from 'reducers/Tasks'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask'


// set up reducers combineReducers
const reducer = combineReducers({
  tasks: tasks.reducer
})

// a store with the reducer(s)
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskList />
      <AddTask />
  </Provider>
  )
}
