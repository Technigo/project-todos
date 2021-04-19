import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { Header } from "./components/Header"
import { Container } from 'components/Container'

import { tasks } from "reducers/tasks"

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Container />
    </Provider>
  )
}
