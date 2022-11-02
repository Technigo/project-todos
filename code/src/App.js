import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import ToDo from 'reducers/todo'
import ToDoList from 'components/ToDoList';
import { AddToDo } from 'components/AddToDo';
import { Header } from 'components/Header';
import { Counter } from 'components/Counter'
import styled from 'styled-components';

export const App = () => {
  const reducer = combineReducers({
    ToDo: ToDo.reducer

  })

  // const store = configureStore({
  //   reducer
  // })

  // Added below so it doesn't remove all the task when reloading the page
  const persistedStateJSON = localStorage.getItem('todosReduxState')
  let persistedState = {}

  if (persistedStateJSON) {
    persistedState = JSON.parse(persistedStateJSON)
  }

  const store = createStore(reducer, persistedState)

  store.subscribe(() => {
    localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
  })

  return (
    <Provider store={store}>
      <Header />
      <Main>
        <AddToDo />
        <Counter />
        <ToDoList />
      </Main>
    </Provider>
  );
}

const Main = styled.div`
border: solid black 2px;
align-items: center;
display: flex;
flex-direction: column;
border: solid green 2px;
`

