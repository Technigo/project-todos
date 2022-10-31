import React from 'react';
import NewTodo from 'components/NewTodo';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todos from 'reducers/store';
import TodoList from 'components/TodoList';
import Summary from 'components/Summary';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Summary />
      Find me in src/app.js!
        <NewTodo />
        <TodoList />
      </Provider>
    </div>
  );
}
