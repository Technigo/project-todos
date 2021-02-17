import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Bottom } from './components/Bottom';

import { todos } from './reducers/todos';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh
`

const ContentWrapper = styled.div`
  padding-bottom: 14vh
`

export const App = () => (
  <Provider store={store}>
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <Tasks />
      </ContentWrapper>
      <Bottom />
    </PageWrapper>
  </Provider>
);
