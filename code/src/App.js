import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { ToDoList } from 'components/ToDoList';
import { todos } from 'redux/reducers/todos'
import { GlobalStyle } from 'components/GlobalStyle';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  // const reducer = combineReducers({
  //   todos: todos.reducer
  // });
  // const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToDoList />
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer