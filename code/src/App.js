import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import tasks from 'reducers/task';
import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask';
import Header from 'components/Header';
/* import TodoCount from 'components/TaskCounter'; */
import TodaysDate from 'components/TodaysDate';

import { OuterWrapper, GlobalStyles, ContentWrapper, BottomLine } from 'styledcomponents/GlobalStyles';

const reducer = combineReducers({
  tasks: tasks.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <Provider store={store}>
          <Header />

          <ContentWrapper>
            <TodaysDate />
            <AddTask />
            {/* <TodoCount /> */}
            <TaskList />
          </ContentWrapper>
          <BottomLine />
        </Provider>

      </OuterWrapper>

    </>
  );
}
