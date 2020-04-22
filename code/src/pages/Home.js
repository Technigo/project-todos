import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { todos } from '../reducers/todos'

import { Header } from '../components/Header'
import { TodoList } from '../components/TodoList'
import { Footer } from '../components/Footer'
import styled from 'styled-components'

//berätta om våra reducers för att skapa ett store
const reducer = combineReducers({ todos: todos.reducer })

const store = configureStore({ reducer })

export const Home = () => {
  return (
    //Providern ger allt innanför tillgång till storen
    <Provider store={store}>
      <TodoContainer>
        <Header />
        <TodoList />
        <Footer />
      </TodoContainer>
    </Provider>
  )
}

const TodoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  min-height: 600px;
  background-color: #F9F4F5;
`