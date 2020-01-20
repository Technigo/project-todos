import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { todoList } from "reducers/todoList"

import { Header } from "components/Header"
import { AddTodo } from "components/AddTodo"
import { UncompletedList } from "components/UncompletedList"
import { CompletedList } from "components/CompletedList"

const reducer = combineReducers({
  todoList: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <div className='app-container'>
      <Header />
      <AddTodo />
      <UncompletedList />
      <CompletedList />
    </div>
  </Provider>
)
