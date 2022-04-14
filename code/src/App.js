import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'

import todos from 'reducers/todos'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import Header from 'components/Header'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
    background-color: #FFD5AC;
    color: #fff6e2;
  }
`

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({
  reducer: reducer
})

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
