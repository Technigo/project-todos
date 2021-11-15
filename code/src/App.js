import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

// this combines all of the slices we have in reducers folder, specify all of them in an object
const reducer = combineReducers({
  // first slice
  todos: todos.reducer,
});

const store = configureStore({
  reducer: reducer, // reducer property equals to reducer variable (on line 7)
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className='todo-container'>
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};
