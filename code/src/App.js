import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import todos from "./reducers/todos"

import AddTodo from "./components/AddTodos"
import TodoList from "components/TodoList"
import FirstText from "components/FirstText"

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main className="main-container">
        <FirstText />
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  )
}
