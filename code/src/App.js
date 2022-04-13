import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todo from 'reducers/todo';

import TodoList from 'Components/TodoList';
import TodoCounter from 'Components/TodoCounter';


const reducer = combineReducers({
  todo: todo.reducer,
});

const store = configureStore({
  reducer: reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList/>
      <TodoCounter/>
    </Provider>
  );
};
