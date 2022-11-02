import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Reducers
import { tasks } from './reducers/tasks'

// Components
import TaskList from './components/TaskList'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { Footer } from './components/Footer'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Header />
      <TaskList />
      <AddTask />
      <Footer />
    </Provider>
  )
}