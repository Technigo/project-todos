import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';
import { Header } from 'components/Header';
import { OuterWrapper, BorderGradient, BorderWhite } from 'components/GlobayStyles';

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
        <BorderGradient>
          <BorderWhite>
            <Header />
            <TaskList />
            <AddTask />
          </BorderWhite>
        </BorderGradient>
      </OuterWrapper>
    </Provider>
  );
}
