import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AddTask } from 'components/AddTask';
import { TaskList } from 'components/TaskList';
import { task } from 'reducers/task';

export const App = () => {
  const reducer = combineReducers({
    tasks: task.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <section className="paper">
        <div className="pattern">
          <div className="content">
            <TaskList />
            <AddTask />
          </div>
        </div>
      </section>
    </Provider>
  );
}
