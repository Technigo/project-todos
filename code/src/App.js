import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from 'components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'
import { tasks } from './reducers/tasks'
import { NoTask } from './components/NoTask'
import './app.css'
import './components/mediaqueries.css'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (

    <Provider store={store}>
      <Header />
      <AddTaskForm />
      <TaskList />
      <NoTask />
    </Provider>
  )
}
