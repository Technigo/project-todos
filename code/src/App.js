import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

//Combine reducer method
const reducer = combineReducers({
  todos: todos.reducer
})

//create store with store method. Pass object ass argument
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <TodoForm />
    </Provider>
  )
}
