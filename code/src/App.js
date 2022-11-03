import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { OuterWrapper, InnerWrapper } from 'Styling/MainStyles';
import toDoItems from 'reducers/toDoItems';
import ToDoList from 'components/ToDoList';
import Add from 'components/Add';

export const App = () => {
  const reducer = combineReducers({
    todo: toDoItems.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <ToDoList />
          <Add />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
