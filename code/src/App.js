import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled from 'styled-components'

import { Header } from "./components/Header"
import { Container } from 'components/Container'

import { tasks } from "reducers/tasks"

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
      <StyledContainer>
        <Header />
        <Container />
      </StyledContainer>
    </Provider>
  )
}
