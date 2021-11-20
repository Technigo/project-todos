import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
// removed configureStore

import todos from './reducers/todos';

import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import Summary from 'components/Summary';
import Header from 'components/Header';

const reducer = combineReducers({
  todos: todos.reducer,
});

// Retrieve localstorage as initial state
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
); //added window etc to make dev tools work

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <>
          <Header />
          <Summary />
          <div className="list-wrapper">
            <AddTodo />
            <TodoList />
          </div>
        </>
      </Provider>
    </div>
  );
};
