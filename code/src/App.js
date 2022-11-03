import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import Board from 'components/Board';
import AddTask from 'components/AddTask'
import TasksCounter from 'components/TasksCounter';
import { OuterWrapper } from 'styled-components/Wrappers';
import styled from 'styled-components';
import iconTrello from 'icons/icons8-trello-48.png'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <BoardTitle>Fake Trello</BoardTitle>
        <AddTask />
        <TasksCounter />
        <Board />
      </OuterWrapper>
    </Provider>
  );
}

const BoardTitle = styled.h1`
  background-image: url(${iconTrello});
  background-repeat: no-repeat;
  background-position: left 15% bottom 30%;
  font-size: 3rem;
  margin-top: 10px;
  margin-bottom: 0;
  @media (max-width: 450px) {
    font-size: 2.6rem;
  }
`