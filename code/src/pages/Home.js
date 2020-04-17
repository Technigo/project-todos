import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TodoList } from '../components/TodoList.js'
import { Header } from '../components/Header.js'
import { todos } from '../reducers/todos.js'
import home from './home.css'


// STORE CREACTION : tell redux about our reducers
const reducer = combineReducers({ todos: todos.reducer })

// Persistence: retrieve the existing state from localstorage if it exists

// Store creation: create the store using our reducers and the retrieved state
const store = configureStore({ reducer })

export const Home = () => {
  return (
    <Provider store={store}>
      <main className="main-wrapper">
        <Header />
        <TodoList />
      </main>
    </Provider>

  )
}