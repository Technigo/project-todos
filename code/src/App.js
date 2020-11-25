import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from './reducers/todos';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    // Can't use useDispatch / useSelector outside of Provider
    <Provider store={store}>
      <AddTodoForm></AddTodoForm>
      <TodoList />
    </Provider>
  )
};
