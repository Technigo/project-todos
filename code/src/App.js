import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'compnents/Header'
import { TodoList } from 'compnents/TodoList'

import { list } from 'reducers/list'
import { todos } from 'reducers/todos'

const reducer = combineReducers({
  list: list.reducer,
  todos: todos.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => (
  <Provider store={store}>
    <Header />
    <TodoList />
  </Provider>
)

