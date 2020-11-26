import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import styled from 'styled-components';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { FilterTodo } from 'components/FilterTodo';

const Container = styled.div`
  width: 80%;
  min-width: 320px;
  max-width: 600px;
  margin: 50px auto;
  background-color: #fff;
`;

const reducer = combineReducers({
  todos: todos.reducer,
  visibilityFilter: visibilityFilter.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <TodoList />
        <FilterTodo />
      </Container>
    </Provider>
  );
};
