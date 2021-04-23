import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components'; 

import todos from './reducers/todos';

import Header from './components/Header';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const Main = styled.main`

`

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
      <Provider store={store}>
          <Header />
          <Main>
            <NewTodo />
            <TodoList />
          </Main>
      </Provider>
  );
};
