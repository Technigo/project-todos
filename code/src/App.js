import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from 'reducers/todos'
import { PaigeWrapper } from 'styles/GlobalStyles';
import { Paige } from './components/Paige'
import { Header } from './components/Header'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })
  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <PaigeWrapper>
        <Header />
        <Paige />
      </PaigeWrapper>
    </Provider>
  );
}
