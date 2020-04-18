import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/todos'
import { TodoContent } from 'components/TodoContent'

const reducer = combineReducers({
  todos: todos.reducer
})

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
      <Provider store={store}>
        <TodoContent />
      </Provider>
  )
}
