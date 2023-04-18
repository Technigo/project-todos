import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTODO from 'components/AddTODO';
import TODOlist from 'components/TODOlist';
import TODOS from 'reducers/todo';

export const App = () => {
// in the combine reducers we add our redux store slices
  const reducer = combineReducers({
    TODOS: TODOS.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddTODO />
      <TODOlist />
    </Provider>
  );
}
