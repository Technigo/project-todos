import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { loadState, saveState } from './localStorage'
import todos from './reducers/todos'
import Main from 'components/Main'

const reducer = combineReducers({
  todos: todos.reducer,
})

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
