import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import styled from "styled-components"

import GlobalFonts from "./fonts/fonts"

import todos from "./reducers/todos"

import TodoList from "./components/TodoList"
import AddTask from "./components/AddTask"
import TaskSummary from "./components/TaskSummary"
import Header from "./components/Header"
import Footer from "./components/Footer"

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

//Styled components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FDF4C9;
  width: 100%;
  margin-top: 30px;
  @media (min-width: 420px) {
    width: 400px;
    box-shadow: 5px 5px 5px #0f0f0f;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    width: 500px;
  }
`

export const App = () => {
  return (
    <Provider store={store}>
      <StyledContainer>
        <GlobalFonts/>
        <Header/>
        <TodoList/>
        <AddTask/>
        <TaskSummary/>
      </StyledContainer>
        <Footer/>
    </Provider>
  )
}
