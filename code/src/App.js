import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import TaskList from 'components/TaskList';
import TaskForm from 'components/Taskform';
import { OuterWrapper, ToDoHeader } from 'components/GlobalStyles';

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
        <ToDoHeader>My things to do!</ToDoHeader>
        <TaskForm />
        <TaskList />
      </OuterWrapper>
    </Provider>
  );
};