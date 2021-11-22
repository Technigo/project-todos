import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'
import { TodoItem } from 'components/TodoItem'
import { DoneList } from 'components/DoneList'

const reducer = combineReducers({ todos: todos.reducer })

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoItem />
      <TodoList />
      <DoneList />
      <AddTodo />
    </Provider>
  )
}
