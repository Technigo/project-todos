import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import TaskTracker from 'components/TaskTracker';
import ToggleCompleteBtn from 'components/ToggleCompleteBtn';
import styled from 'styled-components';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskParentDiv>
        <TaskChildDiv>
          <AddTask />
          <TaskList />
          <TaskTracker />
          <ToggleCompleteBtn />
        </TaskChildDiv>
      </TaskParentDiv>
    </Provider>
  );
}

const TaskParentDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #F3F3F9;
`

const TaskChildDiv = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    flex-direction: column;
    border-radius: 30px;
    background-color: #ffffffbf;
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.29) 0px 0px 14px 5px;
    box-shadow: #0000004a 0px 0px 27px 15px;
`