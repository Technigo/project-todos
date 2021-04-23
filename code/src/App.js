import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from 'reducers/todos'

import Header from 'components/Header'
import ToDoList from 'components/ToDoList'
import Input from 'components/Input'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <ToDoList />
        <Input />
      </Main>
    </Provider>
  )
}

const Main = styled.div`
background-color: #d8ac9c;
background-image:  radial-gradient(#1b2021 1px, transparent 1px), radial-gradient(#1b2021 1px, #d8ac9c 1px);
background-size: 40px 40px;
background-position: 0 0,20px 20px;
min-height: 100vh;
padding: 30px 0;
  @media (min-width: 768px) {
    padding: 60px 0;
  }
  @media (min-width: 1024px) {
    padding: 15px 0;
  }
`
