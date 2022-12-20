import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AppWrapper } from 'GlobalStyle';
// Reducer
import todo from 'reducers/todo'
// Components
import { Header } from 'components/Header';
import { SelectStart } from 'components/SelectStart';
import { Footer } from 'components/Footer';

export const App = () => {
  const reducer = combineReducers({
    todo: todo.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <SelectStart />
      </AppWrapper>
      <Footer />
    </Provider>
  );
}
