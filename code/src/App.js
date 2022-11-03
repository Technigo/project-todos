import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components/macro';
import todos from 'reducers/todos';

import TodoList from 'components/TodoList';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
    // cart: cart.reducer,
  // products: products.reducer
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Background>
        <TodoList />
      </Background>
    </Provider>
  );
}

const Background = styled.div`
  background-color: #5A7869;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`