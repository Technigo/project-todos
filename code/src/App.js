import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from 'reducers/todos'
import { ContentWrapper } from 'styles/GlobalStyles';
import Main from './components/Main'
import Header from './components/Header'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })
  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <ContentWrapper>
        <Header />
        <Main />
      </ContentWrapper>
    </Provider>
  );
}
