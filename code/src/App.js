import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import todos from 'reducers/todos';

import Header from 'components/Header';
import AddTask from 'components/AddTask';
import ToDoList from 'components/ToDoList';

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({
  reducer,
});

const GlobalBox = styled.div`
  height: 85vh;
  width: 65vw;
  background-color: #d7d8d9;
  margin: auto;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <GlobalBox>
        <AddTask />
        <ToDoList />
      </GlobalBox>
    </Provider>
  );
};
