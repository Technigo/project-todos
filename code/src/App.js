import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'
import img from './assets/coolsky.jpg'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Header from './components/Header'
import todos from './reducers/todos'
import { GlobalStyle } from 'GlobalStyle'

const MainWrapper = styled.main`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 5px;
  width: 90%;
  height: 90%;
  border-radius: 25px;
`

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Provider store={store}>
          <MainSection>
            <Header />
            <AddTodo />
            <TodoList />
          </MainSection>
        </Provider>
      </MainWrapper>
    </>
  )
}
