import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AmountOfTodosLeft from "./components/AmountOfTodosLeft"
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'

// Styling
import styled from "styled-components";
import { Box } from '@mui/system'
import GlobalStyle from './styling/globalStyles'
import "@fontsource/roboto"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  background-color: white;
  box-shadow: 0 0.2rem 1.2rem rgb(0 0 0 / 20%);

  @media (min-width: 768px) {
    max-width: 540px;
  }
`

const reducer = combineReducers({
  todos: todos.reducer
}) 

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(
  reducer, 
  persistedState
  )

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <Box
          sx={{
              minWidth: '90%',
              minHeight: '75vh',
              position: 'relative',
            }}
          >
          <AmountOfTodosLeft />
          <TodoList />
          <AddTodo />
        </Box>
      </Wrapper>
    </Provider>
  )
}
