import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';


import tasks from 'reducers/tasks';
import TaskList from 'components/TaskList';
import TaskInput from 'components/TaskInput';



const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <TaskInput />
      <TaskList />
    </Provider>
  )
}
