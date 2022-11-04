import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { OuterWrapper, InnerWrapper } from 'Styling/MainStyles';
import todos from 'reducers/todos';
import ToDoList from 'components/ToDoList';
import Add from 'components/Add';
import Header from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    todo: todos.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <ToDoList />
          <Add />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
