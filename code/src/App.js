import React from 'react';
import { Provider } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from './reducers/todos';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { HeaderContainer } from 'styling/HeaderStyling';
import { Main } from 'styling/MainStyling';

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <Main>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <TodoList />
      </Main>
    </Provider>
  );
};
