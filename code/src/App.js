import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from './reducers/tasks'
import GlobalStyle from 'components/globalStyles'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      Your components can be mounted here, inside the Provider.
    </Provider>
  )
}