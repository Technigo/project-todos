import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from '../src/components/TodoList'
import AddTodo from '../src/components/AddTodo'
import Header from '../src/components/Header'


const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
