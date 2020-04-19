import React from 'react'
import { Provider } from "react-redux"
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from '../reducers/todos'
import { TodoList } from '../components/TodoList'

// StoreCreation : Tell redux about our reducers
const reducer = combineReducers({ todos: todos.reducer })

// Persistence: Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// StoreCreation: Create the store using our reducers and the retrieved state
const store = createStore(reducer, persistedState)

// Persistence: Tell the store to persist the state in localstorage after every action
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>
  )
}