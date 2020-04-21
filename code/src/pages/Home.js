import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { todos } from '../reducers/todos';
import { TodoProjects } from '../components/TodoProjects';
import styled from 'styled-components';

const reducer = combineReducers({ todos: todos.reducer });
const store = createStore(reducer);

export const Home = () => {
  return (
    <Provider store={store}>
      <OuterContainer>
        <TodoProjects />
      </OuterContainer>
    </Provider>
  )
};

const OuterContainer = styled.main`
  width: 375px;
  margin: 0px auto;
`