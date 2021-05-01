import React from 'react'

import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import todos from './reducers/todos'

import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import FooterAppButtons from './components/FooterAppButtons'
import Footer from './components/Footer'

const Content = styled.a `
  overflow: auto; 
  width: 100%; 
  margin: 0; 
`

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store = {store}>
      <Header />
      <TodoInput />
        <Content>
          <TodoList /> 
       </Content>
      <FooterAppButtons />
      <Footer />
    </Provider>
  )
}
