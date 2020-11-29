import React from 'react'
import { Provider } from 'react-redux'
import { List } from './components/List'
import { Input } from './components/Input'
import { Header } from './components/Header'
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { todos } from "./reducers/todos"
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Input />
        <List />
      </Wrapper>
    </Provider>
  )
}
