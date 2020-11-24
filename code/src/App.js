import React from 'react'
import { Provider } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from 'reducers/Todos'
import { List } from './components/List'

const reducer = combineReducers({ todos: todos.reducer})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}></Provider>
  )
}
