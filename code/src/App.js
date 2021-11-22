import React from 'react'
import styled from "styled-components"
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Todohead from 'components/TodoHead'

// Styled components
const TheHead = styled.section`
  max-width: 550px;
  margin: 0 auto;
  background-color: rgba(255,235,205,0.9);
  text-align: center;
  border-radius: 20px 20px 0 0;
`
const TheBody = styled.section`
  max-width: 550px;
  margin: 0 auto;
`

// Makes todos persist refresh
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState ={}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Set up store
const reducer = combineReducers ({
  todos: todos.reducer,
})
const store = createStore (
  reducer,
  persistedState
)

// Checks changes in store
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <TheHead>
        <Todohead />
        <AddTodo />
      </TheHead>
      <TheBody>
        <TodoList />
      </TheBody>
    </Provider>
  )
}
