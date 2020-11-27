import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import styled from 'styled-components';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { FilterTodo } from 'components/FilterTodo';

const reducer = combineReducers({
  todos: todos.reducer,
  visibilityFilter: visibilityFilter.reducer
});

// 1. Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem('reduxState');
let persistedState = {};
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// 2. Create the storage using the initial state
// Needed this window thing to see my store in Chrome via Redux Dev Tool extention
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

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

const Container = styled.div`
  width: 80%;
  min-width: 320px;
  max-width: 600px;
  margin: 50px auto;
  background-color: #fff;
`;
