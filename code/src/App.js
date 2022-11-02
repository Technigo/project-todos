import React from 'react';
import NewTodo from 'components/NewTodo';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todos from 'reducers/store';
import TodoList from 'components/TodoList';
import Summary from 'components/Summary';
import Header from 'components/Header';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex; 
flex-direction: column;
padding-left: 2em; 
padding-right: 2em;   `

const Test = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; `

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <Header />
        <Test>
          <Summary />
          <NewTodo />
        </Test>
        <TodoList />
      </Provider>
    </Wrapper>
  );
}
