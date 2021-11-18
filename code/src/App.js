import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'
import img from './assets/coolsky.jpg'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Header from './components/Header'
import todos from './reducers/todos'
import { GlobalStyle } from './GlobalStyle'

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
  justify-content: center;
`
const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 5px;
  width: 90%;
  margin: 0;
  height: 90%;
  border-radius: 25px;
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 992px) {
    max-width: 1000px;
  }
`

const reducer = combineReducers({
  todos: todos.reducer
})

const persistedState = localStorage.getItem('redux')
  ? JSON.parse(localStorage.getItem('redux'))
  : {}

const store = createStore(
  reducer,
  persistedState
)

store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
})


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
