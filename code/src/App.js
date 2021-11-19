import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from './reducers/todos'

import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'
import { Header } from 'components/Header'

const reducer = combineReducers({ todos: todos.reducer })
// const store = configureStore({ reducer })

// set up for local store 
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};
// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value
const store = createStore(reducer, persistedState);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper>
        <Header />
        <TodoList />
        <AddTodo />
      </MainWrapper>
  </Provider>

  )  
}

const MainWrapper = styled.main`
  background-color: #EFEEEE;
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 93vh;
  border-radius: 20px;
  margin: 20px auto;
  padding: 10px;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1024px) {
    width: 40%;
    max-width: 450px;
  }
`
