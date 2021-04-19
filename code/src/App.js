import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled, { createGlobalStyle } from 'styled-components'

import { Header } from "./components/Header"
import { Container } from 'components/Container'

import { tasks } from "reducers/tasks"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
  body {
    font-family: 'Poiret One', cursive;
    background: linear-gradient(0deg, rgba(236,219,199,0.8) 26%, rgba(185,191,186,0.8) 100%);
    height: 100vh;
    margin: 0;
    color: #03011f;
  }
  button {
    font-family: 'Poiret One', cursive;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <Container />
      </StyledContainer>
    </Provider>
  )
}
