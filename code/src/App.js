import { combineReducers, configureStore } from "@reduxjs/toolkit"
import React from 'react'
import { Provider } from 'react-redux'
import styled from "styled-components"
import { Header } from './components/Header'
import { Input } from './components/Input'
import { List } from './components/List'
import { todos } from "./reducers/todos"

const reducer = combineReducers({ todos: todos.reducer })

// Get persisted state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

// Initialize Redux store with persisted state
const store = configureStore({ reducer, preloadedState: persistedState })

// Every time store updates, run this function: To persist the state to localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const Wrapper = styled.section`
  background-color: #FAFAFC;
  min-width: 100vw;
  min-height: 100vh;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Container>
          <Header />
          <Input />
          <List />
        </Container>
      </Wrapper>
    </Provider>
  )
}
