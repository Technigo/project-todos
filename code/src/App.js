import React from 'react';
import { Display } from 'components/Display'
import { Provider } from 'react-redux' // Provider activation
import { configureStore, combineReducers } from '@reduxjs/toolkit' // Store activation w/ provider + all your reducers combined

import { list } from 'reducers/list'

export const App = () => {
  const reducer = combineReducers({
    list: list.reducer
  })

  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );
}
