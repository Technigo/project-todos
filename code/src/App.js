import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import TaskTracker from 'components/TaskTracker';
import ToggleCompleteBtn from 'components/ToggleCompleteBtn';
import ClearAllBtn from 'components/ClearAllBtn';
import { GlobalStyle } from 'components/GlobalStyle';
import { MainContainer } from 'components/MainStyling';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainContainer>
        <AddTask />
        <TaskList />
        <TaskTracker />
        <ToggleCompleteBtn />
        <ClearAllBtn />
      </MainContainer>
    </Provider>
  );
}
