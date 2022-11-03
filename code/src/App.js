import React from 'react';
import NewTodo from 'components/NewTodo';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todos from 'reducers/store';
import TodoList from 'components/TodoList';
import Header from 'components/Header';
import styled from 'styled-components';
import Summary from 'components/Summary';

const Wrapper = styled.section`
display: flex; 
flex-direction: column;
padding-left: 2em; 
padding-right: 2em;   `

const reducer = combineReducers({
  todos: todos.reducer
});

let preloadedState = {};
const preloadedStateJSON = localStorage.getItem('reduxState')
if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON)
}
const store = configureStore({ reducer, preloadedState })
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <Header />
        <Summary />
        <NewTodo />
        <TodoList />
      </Provider>
    </Wrapper>
  );
}
