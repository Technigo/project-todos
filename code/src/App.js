// font-family: 'Abril Fatface', cursive;
// font-family: 'Amatic SC', cursive;
// font-family: 'Raleway', sans-serif;

import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
//If you write where you're importing from first you get auto completion

import styled from "styled-components"

import { tasks } from "reducers/tasks"
import { AddItemForm } from "components/AddItemForm"
import { ItemsList } from "components/ItemsList"
import { Header } from "components/Header"

import { TodoSummary } from "components/TodoSummary"

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
        {/* <TodoSummary /> */}
        <AddItemForm />
        <ItemsList />

      </main>
    </Provider>
  )
}

