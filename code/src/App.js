import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { loadState, saveState } from './reducers/localStorage'
import todos from './reducers/todos'

import Main from 'components/Main'

const reducer = combineReducers({
  todos: todos.reducer,
})

// to  save in localStorage (pasted code, don't understand how it works...)
const persistedState = loadState()
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
