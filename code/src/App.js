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
  width: 340px;
  margin: 0 auto;
  align-items: center;
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
              bgcolor: 'white',
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              m: 6,
              minWidth: 350,
              minHeight: 500,
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
