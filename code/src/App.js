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
`;


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

// haven´t send a question, but maybe you can quickly say if this is the correct approach to use media queries in styled components? It works, but I just wonder if this is the proper way.

// const Input = styled.input`
//   width: 180px;
//   padding: 5px;
//   border: 1px solid 114e60;
//   @media (min-width: 668px) {
//     width: 300px;
//   }
//   @media (min-width: 1024px) {
//     width: 400px;
//   }
// `
