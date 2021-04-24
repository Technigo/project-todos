import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled, { createGlobalStyle } from 'styled-components'

import Header from "./components/Header"
import AddContainer from "./components/AddContainer"
import TaskContainer from "./components/TaskContainer"

import tasks from "reducers/tasks"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    color: #03011f;
    display: flex;
    justify-content: center;
  }
  body > div {
    width: 100%;    
    height: 100vh;
    box-sizing: border-box;
  }
  button {
    font-family: 'Poppins', sans-serif;
    color: #03011f;
  }
  @media (min-width: 450px) {
    body > div {
      max-width: 450px;
      padding: 20px;
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: linear-gradient(0deg, rgba(236,219,199,0.8) 26%, rgba(185,191,186,0.8) 100%);
  @media (min-width: 450px) {
    border: 1px solid #03011f;
    border-radius: 50px;
  }
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
