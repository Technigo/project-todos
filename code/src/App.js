import React from 'react'
import { Provider } from 'react-redux';
import {combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { todos } from './reducers/todos';
import Header from './components/Header';
import { ToDoList }   from './components/ToDoList';
import AddTodo from 'components/AddTodo';


import backgroundImage from './assets/backgroundImage.png'


//boiler plate for store creation 
const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Container>
         <Header />
      <Provider store={store}>
          <AddTodo />
          <ToDoList />

      </Provider>
      </Container>
  );
};


const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-image: url(${backgroundImage});
    color: #fff
`;