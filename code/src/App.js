import React from 'react';
/* The Provider component allows the store to be accessed by all components in the application.
Provider takes in the store as a prop and wraps the top-level component of the application.
This makes the store available to all the child components through React's context API. */
import { Provider } from 'react-redux';
/* combineReducers is a function that combined multiple reducers into a single function.
It takes an object whose properties are the individual reducers,
and returns a new reducer function that combines them into a single state tree
for configureStore to consume */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NewTask } from 'components/NewTask';
/* configureStore is a function to create a store with preconfigured settings and features.
It eliminates the need to manually set up various middleware and enhancers. */
import { TaskList } from 'components/TaskList';
import { Task } from 'reducers/Task';

export const App = () => {
// need to provide an object as an argument hence curly brackets
  const reducer = combineReducers({
  // objects' properties - names of redux store slices
    task: Task.reducer
  })

  // we need to provide reducer created above
  const store = configureStore({ reducer })

  return (
    // provider takes one prop: store and allows entire app to see and use it
    <Provider store={store}>
      <div>
        <NewTask />
        <TaskList />
      </div>
    </Provider>
  );
}
