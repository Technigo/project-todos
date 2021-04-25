import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { todos } from './reducers/todos';
import { TodoList } from './components/TodoList'
import Header from './components/Header'

const BackgroundContainer = styled.main`
  background-image: linear-gradient(19deg, #2BC0E4 0%, #EAECC6 100%);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BackgroundContainer>
        <Header />
        <TodoList />
      </BackgroundContainer>
    </Provider>
  )
}
