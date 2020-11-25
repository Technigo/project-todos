import React from 'react'
import { Provider } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { List } from './components/List'
import { AddTodo } from './components/AddTodo'
import { Header } from './components/Header'

const reducer = combineReducers ({todos: todos.reducer})
const store = configureStore ({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <List />
      <AddTodo />
    </Provider>
  )
}