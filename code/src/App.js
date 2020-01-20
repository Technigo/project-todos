import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { todoList } from './reducers/todoList'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'

const reducer = combineReducers({
  todoList: todoList.reducer
})
const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Header />
    <AddTodo />
    <TodoList />
  </Provider>
)

//To do
//Total tasks showing, instead show incomplete tasks in header
//STYLING with styled components
//Update README when done

//Nice to have
//When complete task, move to under incomplete task, animation?s
//Clear all button?
//Save list?

