import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components/macro';
import tasks from 'reducers/tasks';

import TaskList from 'components/TaskList';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
    // cart: cart.reducer,
  // products: products.reducer
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <TaskList />
      </OuterWrapper>
    </Provider>
  );
}

const OuterWrapper = styled.div`
  background-color: #5A7869;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`