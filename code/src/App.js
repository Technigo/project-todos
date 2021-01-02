import React from 'react'
import { Provider } from 'react-redux';
import {combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { todos } from './reducers/todos';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/AddTodo';


const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Container>
         <Header />
      <Provider store={store}>
          <Form />
          <ToDoList />
      </Provider>
      </Container>
  );
};


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #111
`;