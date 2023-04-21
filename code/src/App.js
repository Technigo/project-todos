import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Header } from 'components/Header';
import { AddTask } from 'components/AddTask';
import { TaskList } from 'components/TaskList';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
    display: grid;
    grid-template-columns: 5% repeat(2, 1fr) 5%;
    justify-content: center;
    align-items: center;
    background-color: #efe5dc;
    min-height: 100vh;

    @media (min-width: 667px) {
        grid-template-columns: 1fr repeat(6, 160px) 1fr;
        background-color: #f4f3ee;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr repeat(10, 80px) 1fr;
    }
`;

const StyledMainWrapper = styled.div`
    grid-column: 2 / 4;
    display: flex;
    flex-direction: column;

    @media (min-width: 667px) {
        grid-column: 3 / 7;
        padding: 40px;
        margin-bottom: 20px;
        border: none;
        border-radius: 25px 5px 25px 5px;
        -webkit-border-radius: 25px 5px 25px 5px;
        -moz-border-radius: 25px 5px 25px 5px;
        background-color: #efe5dc;
        box-shadow: 0 5px 8px  rgb(140,115,115,0.2), 0 3px 10px  rgb(140,115,115,0.2);
    }

    @media (min-width: 1024px) {
        grid-column: 2 / 12;
    }
`;

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <StyledMainContainer>
        <StyledMainWrapper>
          <Header />
          <AddTask />
          <TaskList />
        </StyledMainWrapper>
      </StyledMainContainer>
    </Provider>
  );
}

