import React from 'react'
import styled from "styled-components"
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoCounter from 'components/TodoCounter'

const TheHead = styled.section`
  max-width: 550px;
  margin: 0 auto;
  background-color: lightgrey;
  text-align: center;
  border-radius: 20px 20px 0 0;
`

const TheBody = styled.section`
  max-width: 550px;
  margin: 0 auto;
`

const reducer = combineReducers ({
  todos: todos.reducer,
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <TheHead>
        <TodoCounter />
        <AddTodo />
      </TheHead>
      <TheBody>
        <TodoList />
      </TheBody>
    </Provider>
  )
}
