import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import TodoList from './components/TodoList'
import TodoInformation from './components/TodoInformation'

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoInformation />
      <TodoList />
    </Provider>
  )
}
