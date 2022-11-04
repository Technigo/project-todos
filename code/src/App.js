import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos';
import { OuterWrapper, InnerWrapper } from 'Styling/MainStyles';
import Header from 'components/Header';
import ToDoList from 'components/ToDoList';
import Add from 'components/Add';

import NoData from 'components/NoData';

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
          <NoData />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
