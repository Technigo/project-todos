/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div className="main">
      <h2>Todo list</h2>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  )
}
