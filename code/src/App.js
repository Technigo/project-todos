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
      <h1> Testar om det inte ska vara en rad här</h1>
      <Header />
      <TaskList />
      <h2> Provar hur det ser ut</h2>
      <AddTask />
      <h3> Avslutande rubrik</h3>
    </Provider>
  );
}

