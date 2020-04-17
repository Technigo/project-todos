import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from '../reducers/todos'
import { TodoList } from '../components/TodoList'

// StoreCreation : Tell redux about our reducers
const reducer = combineReducers({ todos: todos.reducer })

// Persistence: Retrieve the existing state from localstorage if it exists

// StoreCreation: Create the store using our reducers and the retrieved state
const store = configureStore({ reducer })

// Persistence: Tell the store to persist the state in localstorage after every action

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>
  )
}