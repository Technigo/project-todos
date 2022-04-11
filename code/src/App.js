import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from './reducers/Tasks'

import ToDoList from 'components/ToDoList'
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({
  reducer
})

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <ToDoList />
    </Provider>
  )
}
