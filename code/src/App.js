/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/task';
import AddTask from 'componenets/AddTask';
import TaskList from 'componenets/TaskList';
import Header from 'componenets/Header';
import Main from 'componenets/Main';
/* import styled from 'styled-components/macro'; */

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Main />
      <Header />
      <TaskList />
      <AddTask />
      <h2>Here is a delete all button</h2>
      <h2>And is a all button</h2>
      <h3> Great job today! Let´s continue with a glas of wine</h3>
    </Provider>
  );
}

