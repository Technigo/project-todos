import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import tasks from 'reducers/task';

import AddTask from 'components/AddTask';
import Header from 'components/Header';
import TodaysDate from 'components/TodaysDate';
import TaskList from 'components/TaskList';
import Greeting from 'components/Greeting';

import { OuterWrapper, GlobalStyles, ContentWrapper, BottomLine } from 'styledcomponents/GlobalStyles';

const reducer = combineReducers({
  tasks: tasks.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BottomLine />
      <OuterWrapper>
        <Provider store={store}>
          <Header />
          <ContentWrapper>
            <Greeting />
            <TodaysDate />
            <AddTask />
            <TaskList />
          </ContentWrapper>
          <BottomLine />
        </Provider>
      </OuterWrapper>
    </>
  );
}
