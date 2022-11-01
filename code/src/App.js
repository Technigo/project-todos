import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todo from 'reducers/todo';
import TodoList from 'components/TodoList';

export const App = () => {
  const reducer = combineReducers({
    todo: todo.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
