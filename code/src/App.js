import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import taskReducer from 'reducers/tasks';

import tasks from 'reducers/tasks';
import TaskList from 'components/TaskList';


const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <div>Hello Technigo!</div>
      <TaskList />
    </Provider>
  )
}
