import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Header from 'components/Header';
import Footer from 'components/Footer'
import AddToDos from 'components/AddToDos';
/* import ToDoList from 'components/ToDoList'; */
import todos from 'reducers/todos';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <Header />
      <AddToDos />
      <Footer />

    </Provider>
  );
}

/* <AddToDos />
      <ToDoList /> */