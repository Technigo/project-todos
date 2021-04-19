import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'

import todos from './reducers/todos'
import { Header } from './components/Header'
import './App.css'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-main-wrapper">
        <Header />
        <Todos/ >
        <AddTodo />
      </div>
    </Provider>
  )
}
