import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { tasks } from "reducers/tasks"
import { AddItemForm } from "components/AddItemForm"
import { ItemsList } from "components/ItemsList"
import { Header } from "components/Header"

import "./app.css"

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      <Header />
      <main>
        <AddItemForm />
        <ItemsList />
      </main>
    </Provider>
  )
}