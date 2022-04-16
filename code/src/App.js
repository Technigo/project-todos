import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'

import todos from 'reducers/todos'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import Header from 'components/Header'
import DeleteAll from 'components/DeleteAll'
import EmptyPic from 'components/EmptyPic'


const GlobalStyle = createGlobalStyle`
:root {
  --ltgrey: #eef0e7;
  --ltblue: #bfd6d3;
  --brown: #443929;
  --darkblgr: #284e57;
  --misty: #aac3bd;
  --plum: #4D4049;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    background-color: var(--ltgrey);
    color: var(--darkblgr);
    display: flex;
    flex-direction: column;
    align-items: center;
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
      <DeleteAll />
    </Provider>
  )
}
