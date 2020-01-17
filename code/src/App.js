import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { AddTodo } from "components/AddTodo"
import { TodoList } from "components/TodoList"

const reducer = combineReducers({})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <AddTodo />
    <TodoList />
  </Provider>
)
