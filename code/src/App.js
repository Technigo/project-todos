import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import Header from './components/Header'
import TodoList from './components/TodoList'
import ClearTodo from './components/ClearTodo'
import AddNewTodo from './components/AddNewTodo'


const reducer = combineReducers({
  todos: todos.reducer
})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <AddNewTodo />
        <TodoList />
        <ClearTodo />
      </div>
    </Provider>
  )
}
