import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { loadState, saveState } from './reducers/localStorage'
import { todos } from './reducers/todos'

import { AddTodo } from './components/AddTodo'
import { TodosList } from './components/TodosList'

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

// const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodosList />
    </Provider>
  )
}
