import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Header } from './components/Header'
import { ToDoInput } from './components/ToDoInput'
import { todos } from 'reducers/todos'

const reducer = combineReducers({todos: todos.reducer})
const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ToDoInput />
    </Provider>
  )
}

