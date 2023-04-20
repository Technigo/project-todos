import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import tasks from 'reducers/tasks';
import { Container } from '@mui/material';
import TaskStatus from 'components/TaskStatus';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Container style={{ width: '90%', marginTop: '30%' }}>
        <AddTask />
        <TaskList />
        <TaskStatus />
      </Container>
    </Provider>
  );
}
