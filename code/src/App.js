/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import todos from 'reducers/todo';

// const reducer = combineReducers({
//   todos: undefined

// });
// const store = configureStore({ reducer })

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
      {/* <div>
      Find me in src/app.js!
      </div> */}
    </Provider>
  )
}
