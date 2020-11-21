import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Reducers
import { todos } from './reducers/todos';

// Components
import { ListOfTodos } from './components/ListOfTodos';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewTodo } from './components/NewTodo';

const reducer = combineReducers({
  todos: todos.reducer,
});
const store = configureStore({ reducer });

// ----------------------------------------------------------------

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <NewTodo />
      <ListOfTodos />
      <Footer />
    </Provider>
  );
};
