import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from 'reducers/todos';
import { visibilityFilter } from 'reducers/visibilityFilter';

const reducer = combineReducers({
  todos: todos.reducer,
  visibilityFilter: visibilityFilter.reducer
});

const store = configureStore({
  reducer
});

export const App = () => {
  return <Provider store={store}></Provider>;
};
