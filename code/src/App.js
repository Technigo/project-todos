import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "@reduxjs/toolkit"

import todos from "./reducers/todos"

import AddTodo from "./components/AddTodos"
import TodoList from "components/TodoList"
import FirstText from "components/FirstText"
import DeleteAll from "components/DeleteAll"

const reducer = combineReducers({
  todos: todos.reducer,
})

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <main className="main-container">
        <section className="first-section">
          <FirstText />
          <AddTodo />
        </section>
        <section className="second-section">
          <TodoList />
          <DeleteAll />
        </section>
      </main>
    </Provider>
  )
}
