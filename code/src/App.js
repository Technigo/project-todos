import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import tasks from 'reducers/tasks';
import Header from 'components/Header.jsx';
import TaskInput from 'components/TaskInput';
import TaskList from 'components/TaskList';
import TaskCounter from 'components/TaskCounter';


const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <TaskInput />
        <TaskList />
        <TaskCounter />
      </div>
    </Provider>
  );
};
