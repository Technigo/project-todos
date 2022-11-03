import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toDos from 'reducers/todo';
import { OuterWrapper, InnerWrapper } from 'components/styled/Wrappers.styled';
import Header from 'components/Header';
import AddNew from 'components/Form';
import List from 'components/List';

export const App = () => {
  const reducer = combineReducers({
    toDos: toDos.reducer
  });

  const store = configureStore({ reducer });

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Provider store={store}>
          <Header />
          <AddNew />
          <List />
        </Provider>
      </InnerWrapper>
    </OuterWrapper>
  );
};
