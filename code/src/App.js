import React from 'react';
import TodoList from 'components/TodoList';
import { Provider } from 'react-redux'
import Header from 'components/Header';
import TodoForm from './components/TodoForm'
import CompletedTodos from './components/CompletedTodos'
import store from './redux/store'

export const App = () => {
  return (
    <div className="app-wrap">
      <Provider store={store}>
        <Header />
        <TodoForm />
        <TodoList />
        <CompletedTodos />
      </Provider>
    </div>
  );
};

