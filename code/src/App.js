import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'
import { TodoItem } from 'components/TodoItem'
import { DoneList } from 'components/DoneList'

const reducer = combineReducers({ todos: todos.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoItem />
      <TodoList />
      <DoneList />
      <AddTodo />
    </Provider>
  )
}
