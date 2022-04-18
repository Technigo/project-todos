import React from "react"

import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import todos from "reducers/todos"
import AddTodos from "components/AddTodo"
import NewTodo from "components/NewTodo"

const reducer = combineReducers({
  todos: todos.reducer,
})


const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodos  />
      <NewTodo />
    </Provider>
  )
}
