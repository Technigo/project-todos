import React from "react"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"

import todos from "./reducers/todos"

import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

const reducer = combineReducers({ todos: todos.reducer })

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(reducer, persistedState)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()))
})
export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
