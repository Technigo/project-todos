import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { AddTodo } from 'components/AddTodo'
import { tasks } from './reducers/tasks'
import { TotalTodos } from './components/TotalTodos'
import { List } from './components/List'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TotalTodos />
      <List />
      <AddTodo />
    </Provider>
  )
}