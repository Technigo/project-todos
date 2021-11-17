import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

// this combines all of the slices we have in reducers folder, specify all of them in an object
const reducer = combineReducers({
  // first slice
  todos: todos.reducer,
});

const persistedStateJSON = localStorage.getItem('todosReduxState'); // if there is anything stored in the local storage, it will show here
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer, // reducer property equals to reducer variable (on line 7)
  persistedState
);

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <main>
      <div className='todo-container'>
        <Provider store={store}>
          <Header />
          <AddTodo />
          <TodoList />
        </Provider>
      </div>
    </main>
  );
};
