import React from 'react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { todos } from '../reducers/todos'
import { TodoList } from '../components/TodoList'

// Variable combining reducers from todos
const reducer = combineReducers({ todos: todos.reducer })

// Persistence: Retrieves the existing state from localstorage if it exists
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Creates the store using reducers and the retrieved state
const store = createStore(reducer, persistedState)

// Tell the store to persist the state in localStorage after every action
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList />
      </main>
    </Provider>
  )
}