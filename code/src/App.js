import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';

import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import Summary from 'components/Summary';

const reducer = combineReducers({
  todos: todos.reducer,
});

// Jennies code starts here: Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <>
          <Summary />
          <AddTodo />
          <TodoList />
        </>
      </Provider>
    </div>
  );
};
