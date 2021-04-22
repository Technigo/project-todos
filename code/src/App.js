import React from 'react'
import { Provider }  from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoApp from './components/TodoList'
import Header from './components/Header'

import "./index.css";

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header /> 
        <TodoApp /> 
    </Provider>
  )
}
