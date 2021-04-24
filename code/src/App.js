import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled, { createGlobalStyle } from 'styled-components'; 

import todos from './reducers/todos';

import Header from './components/Header';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  
@media (min-width: 768px) {
  body {
    background: #303960;
  }
}
`

const Container = styled.div`
@media (min-width: 768px) {
  max-width: 70%;
  margin: 70px auto;
  border: solid 1px #ffffff;
  border-radius: 5px;
}

@media (min-width: 1200px) {
  max-width: 60%;
  margin: 60px auto;
}
`

const Main = styled.main`
  background: #ffffff;
`

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
      <Provider store={store}>
        <GlobalStyle />
          <Container>
            <Header />
            <Main>
              <NewTodo />
              <TodoList />
            </Main>
          </Container>
      </Provider>
  );
};
