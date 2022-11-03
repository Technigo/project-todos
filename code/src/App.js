import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ToDo from 'reducers/todo'
import ToDoList from 'components/ToDoList';
import { AddToDo } from 'components/AddToDo';
import { Header } from 'components/Header';
import styled from 'styled-components';

const reducer = combineReducers({
  ToDo: ToDo.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().ToDo.items)))

  return (
    <Provider store={store}>
      <Header />
      <Main>
        <AddToDo />
        <ToDoList />
      </Main>
    </Provider>
  );
}

const Main = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`

