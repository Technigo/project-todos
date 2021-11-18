import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoAmount from './components/TodoAmount';

//preparing bag of slices
const reducer = combineReducers({
  todos: todos.reducer,
});

//creating local storage
const persistedStateJSON = localStorage.getItem('todosReduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header />
        <AddTodo />
        <TodoAmount />
        <TodoList />
      </div>
    </Provider>
  );
};
