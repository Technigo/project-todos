import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import tasks from 'reducers/tasks';
import { Card, CardMedia, Container } from '@mui/material';
import TaskStatus from 'components/TaskStatus';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Card elevation={0} style={{ backgroundColor: 'transparent', height: '250px' }}>
        <CardMedia component="img" image="../assets/logo.png" alt="logo" style={{ width: '300px', margin: '0 auto' }} />
      </Card>
      <Container style={{ width: '90%' }}>
        <AddTask />
        <TaskList />
        <TaskStatus />
      </Container>
    </Provider>
  );
}
