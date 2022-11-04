/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TaskList from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { tasks } from 'reducers/tasks'
import { TodoCounter } from 'components/TodoCounter'

/* const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer }) */

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <TaskList />
      <AddTask />
      <TodoCounter />
    </Provider>
  )
}