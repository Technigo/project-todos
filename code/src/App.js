import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'

//collect all slices and put them together in one place
const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer }) //(short for "reducer: reducer") the reducer property equals the reducer variable 

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
    </Provider>
  )
}
