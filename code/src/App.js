import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from './reducers/todos';
import TodoList from './components/TodoList';
import Header from './components/Header';


const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
`

export const App = () => {

  return (
    <Provider store={store}>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <TodoList />
    </Provider>
  );
};
