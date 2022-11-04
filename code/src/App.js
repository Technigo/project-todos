import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { Header } from 'components/Header';
import { Counter } from 'components/Counter';
import { AddTaskForm } from 'components/AddTaskForm';
import { TaskList } from 'components/TaskList';
import { Styled } from 'components/Wrappers'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Styled.OuterWrapper>
        <Styled.InnerWrapper>
          <Header />
          <Counter />
          <AddTaskForm />
          <TaskList />
        </Styled.InnerWrapper>
      </Styled.OuterWrapper>
    </Provider>
  );
}
