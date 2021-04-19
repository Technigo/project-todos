import React from 'react'
import { Provider }  from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from './components/TodoList'

// CONNECTING the slice to the store:: ! 
//method combineReducers
// redux store is the handbag - here we put all of the slices
// slice is one part of the handbag - this is in todos.js
const reducer = combineReducers({
  todos: todos.reducer
//  users: users.reducer
//  messages: messages.reducer
})

const store = configureStore({ reducer })
// Provider is the highest wrapper of our store - it's like Routerlink typ.

export const App = () => {
  return (
    <Provider store={store}>
      < TodoList />
    </Provider>
  )
}
