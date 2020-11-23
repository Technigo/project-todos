import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { Header } from 'components/Header';
import { TaskList } from 'components/TaskList';
import { Footer } from 'components/Footer';

import { tasks } from 'reducers/tasks';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <MainContainer>
      <Header />
      <Provider store={store}> 
        <TaskList />
      </Provider>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 0;  
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`
