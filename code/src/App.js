import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';

import { Summary } from './components/Summary';
import { TodoList } from './components/TodoList';
import { FilterTodo } from 'components/FilterTodo';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Summary />
      <TodoList />
      <FilterTodo />
    </Provider>
  );
};
