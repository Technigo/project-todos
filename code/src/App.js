/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TodoList } from 'components/TodoList';
import { Header } from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import { todos } from './reducers/todos';
import { AddTodo } from './components/AddTodo';

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <GlobalStyles />
        <Header />
        <section className="main">
          <TodoList />
          <AddTodo />
        </section>
        <Footer />
      </div>
    </Provider>
  );
}
