import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled, { createGlobalStyle } from 'styled-components'

import { Header } from "./components/Header"
import { AddContainer } from "./components/AddContainer"
import { TaskContainer } from "./components/TaskContainer"

import { tasks } from "reducers/tasks"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(0deg, rgba(236,219,199,0.8) 26%, rgba(185,191,186,0.8) 100%);
    margin: 0;
    color: #03011f;
  }
  button {
    font-family: 'Poppins', sans-serif;
    color: #03011f;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <StyledContainer>
        <Header />
        <TaskContainer />
        <AddContainer />
      </StyledContainer>
    </Provider>
  )
}
