import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import tasks from './reducers/tasks';

import ToDoList from './components/ToDoList';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import Footer from './components/Footer';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer});

const AppContainer = styled.div`
  width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 750px;
  }
`

export const App = () => {
  return (
    <Provider store= {store}>
      <AppContainer>
        <Header/>
        <TaskCreator/>
        <ToDoList/>
        <Footer/>
      </AppContainer>
    </Provider>
  )
};


