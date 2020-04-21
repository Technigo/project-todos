import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

import { todos } from './reducers/todos'
import { Main } from './lib/Container'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Main><TodoList /></Main>
      
      
      
    </Provider>
  )
}
