// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AddTask from './components/AddTask'
import { tasks } from './reducers/tasks'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'
import CompleteAllButton from './components/CompleteAllButton'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
      <CompleteAllButton />
      <TaskCounter />
    </Provider>
  )
}
