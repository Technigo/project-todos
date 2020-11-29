import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { Container } from "./components/container"
import { List } from "./components/list"
import { Input } from "./components/input"
import { todos } from "./reducer/todos"

import styled from "styled-components"

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore ({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
    <TodoContainer>
      <Container/>
      <Input/>
      <List/>
    </TodoContainer>
  </Provider>
  )
}

const TodoContainer = styled.section``