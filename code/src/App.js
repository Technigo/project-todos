import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';

import TaskPage from 'components/TaskPage';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <TaskPage />
    </Provider>
  );
}
