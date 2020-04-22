import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todo } from 'reducers/todo'
import { TodoContainer } from './components/TodoContainer'

const reducer = combineReducers({ 
  todo: todo.reducer
 })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  )
}

// Make some items a priority
