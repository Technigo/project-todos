import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import TaskList from 'components/TaskList';
import TaskForm from 'components/Taskform';
import { OuterWrapper, InnerWrapper } from 'components/GlobalStyles';
import Header from 'components/Header'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TaskForm />
          <TaskList />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
};