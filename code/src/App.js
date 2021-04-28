import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Header from './components/Header'
import NoData from './components/NoData'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
      <NoData />
    </Provider>
  )
}
