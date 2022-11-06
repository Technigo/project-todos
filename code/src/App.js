// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Tasks from 'components/TaskList'
import tasks from 'reducers/tasks'
import NewTask from 'components/NewTask'
import Header from 'components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <tasks />
      <Tasks />
      <NewTask />
    </Provider>
  )
}