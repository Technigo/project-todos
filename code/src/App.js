import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import styled, { createGlobalStyle } from "styled-components"

import GlobalFonts from "./fonts/fonts"  //Comes from createGlobalstyle in fonts

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
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FDF4C9;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 420px) {
    body {
      background-color: #fff;
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FDF4C9;
  width: 100%;
  margin-top: 15px;

  @media (min-width: 420px) {
    margin-top: 30px;
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
      <GlobalStyle/>
      <GlobalFonts/>
      <StyledContainer>
        <Header/>
        <TodoList/>
        <AddTask/>
        <TaskSummary/>
      </StyledContainer>
      <Footer/>
    </Provider>
  )
}
