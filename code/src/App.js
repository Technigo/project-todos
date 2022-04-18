import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import styled from "styled-components"

import todos from "reducers/todos"
import AddTodos from "components/AddTodo"
import NewTodo from "components/NewTodo"

const Container = styled.div`
  background: url(https://images.unsplash.com/photo-1558051815-0f18e64e6280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <AddTodos />
        <NewTodo />
      </Provider>
    </Container>
  )
}
