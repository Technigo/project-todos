/* eslint-disable linebreak-style */
import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { ToDoList } from 'components/ToDoList';
// import { PrintButton } from 'components/PrintButton';
import { GlobalStyle } from './GlobalStyle';
import { NewTaskForm } from './components/NewTaskForm'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  console.log(reducer)

  const store = configureStore({ reducer });
  return (
    <GlobalStyle>
      <Provider store={store}>
        <NewTaskForm />
        <ToDoList />
      </Provider>
    </GlobalStyle>

  );
}
