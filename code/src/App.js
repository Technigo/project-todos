import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todo from 'reducers/todo';
import TodoList from 'components/TodoList';
import TodoSubmitForm from 'components/TodoSubmitForm';

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todo.items)))

export const App = () => {
  return (
    <Provider store={store}>
      <TodoSubmitForm />
      <TodoList />
    </Provider>
  );
}
