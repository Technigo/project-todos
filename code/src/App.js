import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';

import { todos } from './reducers/todos';

import Home from 'pages/Home';
import TodoList from 'components/TodoList';
import TodoInput from 'components/TodoInput';
import CustomCheckbox from 'library/CustomCheckbox';

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer });

//const persistedState = localStorage.getItem
// const persistedStateJSON = localStorage.getItem('todo-reduxState')
// let persistedState = {}
// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON)
// }
// console.log(`persistedState: ${persistedState}`)

// const store = configureStore({
//   reducer,
//   preloadedState: persistedState
// })

// store.subscribe(() => {
//   localStorage.setItem('todo-reduxState', JSON.stringify(store.getState()))
// })

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
      {/* <CustomCheckbox></CustomCheckbox> */}
    </Provider>
  );
};
