import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos'
import ToDoList from 'components/ToDoList';
import AddToDo from 'components/AddToDo';
import Header from 'components/Header';
import ToDoAmount from 'components/ToDoAmount'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({
    reducer
  });

  // creating local storage
  /*   const persistedStateJSON = localStorage.getItem('todosReduxState');
  let persistedState = {};

  if (persistedStateJSON) {
    persistedState = JSON.parse(persistedStateJSON);
  }

  const store = configureStore({ reducer }, persistedState);

  store.subscribe(() => {
    localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
  }); */

  return (
    <Provider store={store}>
      <div className="outer-wrapper">
        <Header />
        <AddToDo />
        <ToDoAmount />
        <ToDoList />
      </div>
    </Provider>
  );
}
