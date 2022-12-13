/* eslint-disable comma-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tasks from 'reducers/tasks';
import { Header } from 'components/Header';
import TaskList from 'components/TaskList';
import TaskInput from 'components/TaskInput';

import { OuterWrapper, InnerWrapper } from 'styles/GlobalStyles';
import styled from 'styled-components';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
  });

  const store = configureStore({
    reducer,
  });

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TaskInput />
          <TaskList />
        </InnerWrapper>
        <Footer>
          <div>
            <p>Created as a project at Technigo</p>
            <p>
              ©{' '}
              <a href="mailto: saralie.bognandi@gmail.com">Saralie Bognandi</a>{' '}
              2022
            </p>
          </div>
        </Footer>
      </OuterWrapper>
    </Provider>
  );
};

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
