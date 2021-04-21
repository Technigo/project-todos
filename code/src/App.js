import React from 'react'
import { Provider }  from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from './components/TodoList'
import Header from './components/Header'

import "./index.css";
import TodoStudies from './components/TodoStudies'

const reducer = combineReducers({
  todos: todos.reducer
//  users: users.reducer
//  messages: messages.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header /> 
      <TodoList />
      <TodoStudies />
    </Provider>
  )
}
