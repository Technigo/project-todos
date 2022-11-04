/* import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AppContent from './components/AppContent'
import tasks from './reducers/todos'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <div>
        <AppContent />

      </div>
    </Provider>
  );
} */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/todos';
import AppContent from 'components/AppContent';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
