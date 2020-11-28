import React from 'react'
import { Provider } from 'react-redux'
import { TodoList } from "../components/TodoList"
import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from '../reducers/todos.js'
import { TodoInput } from 'components/TodoInput'

const reducer = combineReducers({ todos: todos.reducer })

const store = configureStore({ reducer })

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>
  )
}
