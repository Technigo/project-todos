import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from 'reducers/todos';
import TodoList from 'components/TodoList';

export const App = () => {
  const reducers = combineReducers({
    todos: todos.reducer
  })
  const store = configureStore({
    reducer: reducers
  })
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
