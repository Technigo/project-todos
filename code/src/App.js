import React from "react"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"
import styled from "styled-components"

import todos from "./reducers/todos"

import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import CompleteAll from "./components/CompleteAll"
import Footer from "./components/Footer"

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
    <Main>
      <Provider store={store}>
        <Header />
        <AddTodo />
        <TodoList />
        <CompleteAll />
        <Footer />
      </Provider>
    </Main>
  )
}

const Main = styled.div`
  ${"" /* width: 400px; */}
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  background-color: #fffcfc;
  padding: 5px;
  border-radius: 10px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: rgb(139 139 139) 10px 10px 10px;
  @media (min-width: 767px) {
    width: 500px;
    margin: 20px 0px;
    padding: 20px 20px;
    font-size: 16px;
  }
`
