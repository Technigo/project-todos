import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from 'reducers/todos';
import TodoList from 'components/TodoList';
import AddTodoItem from 'components/AddTodoItem';

export const App = () => {
  const reducers = combineReducers({
    todos: todos.reducer
  })
  const store = configureStore({
    reducer: reducers
  })
  return (
    <Provider store={store}>
      <AddTodoItem />
      <TodoList />
    </Provider>
  );
}
