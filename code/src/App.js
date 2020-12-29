import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from 'reducers/todos';
import  List  from 'components/List';
import AddTodo from 'components/AddTodo';
import { MainContainer } from 'styled-components/MainContainer';

const reducer = combineReducers({ todos: todos.reducer , });
const store = configureStore ({ reducer });

export const App = () => {
  return (
    <Provider store={store}> 
    <MainContainer tabIndex="0">
      <AddTodo></AddTodo>
      <List></List>
      </MainContainer>
    </Provider>
  )
};
