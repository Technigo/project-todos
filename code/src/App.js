import React from 'react';
import TodoList from 'components/TodoList';
import { Provider } from 'react-redux'
import TodoForm from './components/TodoForm'
import CompletedTodos from './components/CompletedTodos'
import store from './redux/store'

export const App = () => {
  return (
    <div className="app-wrap">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
        <CompletedTodos />
      </Provider>
    </div>
  );
};

