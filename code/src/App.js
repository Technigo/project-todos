/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TodoList from 'components/TodoList';
import { Header } from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import AddTodo from 'components/AddTodo';
import { todos } from './reducers/todos';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

const OuterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;  
`;

const InnerWrapper = styled.section`
  width: 80%;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <GlobalStyles />
          <Header />
          <main>
            <AddTodo />
            <TodoList />
          </main>
          <Footer />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
