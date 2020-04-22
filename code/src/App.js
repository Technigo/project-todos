import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/todos'
import { TodoContent } from 'components/TodoContent'

// Reducer
const reducer = combineReducers({
  todos: todos.reducer
})

// If state exists - collect from localstorage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Our store created
const store = createStore(reducer, persistedState)

// Persists state in localstorage for each action
store.subscribe(() => {
  localStorage.setItem("reduxState", 
  JSON.stringify(store.getState()));
});

export const App = () => {
  return (
      <Provider store={store}>
        <TodoContent />
      </Provider>
  )
}
