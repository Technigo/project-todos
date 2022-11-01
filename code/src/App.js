import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import List from 'components/List';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { OuterWrapper } from 'styles/mainStyles';
import tasks from './reducers/tasks';
// import styled from 'styled-components/macro';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <Header />
        <List />
        <Footer />
      </OuterWrapper>
    </Provider>
  );
}
