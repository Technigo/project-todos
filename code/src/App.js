import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import Header from './components/Header'
import TodoList from './components/TodoList'
import ClearTodo from './components/ClearTodo'


const reducer = combineReducers({
  todos: todos.reducer
})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <TodoList />
        <ClearTodo />
      </div>
    </Provider>
  )
}
