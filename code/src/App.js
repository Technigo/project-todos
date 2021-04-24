import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { loadState, saveState } from './reducers/localStorage'
import  todos from './reducers/todos'

import { Container } from './components/Container'

const reducer = combineReducers({
  todos: todos.reducer
})

const persistedState = loadState();
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})

export const App = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  )
}
