import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todoList } from './reducers/todoList'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

const reducer = combineReducers({
  todoList: todoList.reducer
})
const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <AddTodo />
    <TodoList />
  </Provider>
)
