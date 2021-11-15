import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'

//collect all slices and combine to one box
const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({reducer //reducer left is built in, reducer right is our variable.
})

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo/>
    </Provider>
  )
}
