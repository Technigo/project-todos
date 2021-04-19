import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  todos from './reducers/todos'

import { Container } from './components/Container'

//combine is a method, slice is one part of the store 
const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  )
}
