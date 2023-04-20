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
    grid-template-columns: 1fr repeat(2, 150px) 1fr;

    @media (min-width: 667px) {
        grid-template-columns: 1fr repeat(6, 100px) 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr repeat(10, 50px) 1fr;
    }
`;

const StyledMainWrapper = styled.div`
    grid-column: 2 / 4;
    margin: 10% 0;

    @media (min-width: 667px) {
        grid-column: 3 / 7;
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

