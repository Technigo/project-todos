/* eslint-disable linebreak-style */
import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { ToDoList } from 'components/ToDoList';
import { HeaderDate } from 'components/HeaderDate';
import { GlobalStyle } from './GlobalStyle';
import { NewTaskForm } from './components/NewTaskForm'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <GlobalStyle>
        <HeaderDate />
        <NewTaskForm />
        <ToDoList />
      </GlobalStyle>
    </Provider>

  );
}
