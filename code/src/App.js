import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { todos } from "reducers/todos"

import { Header } from "components/Header"
import { AddTask } from "components/AddTask"
import { EmptyListState } from "components/EmptyListState"
import { TaskList } from "components/TaskList"
import { ClearButton } from "components/ClearButton"
import { Attribution } from "components/Attribution"

import "index.css"

// Combine reducers
const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <EmptyListState />
      <TaskList />
      <ClearButton />
      <Attribution />
    </Provider>
  )
}
