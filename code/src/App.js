import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import ProgressBar from 'components/ProgressBar';
import Footer from 'components/Footer';
import { tasks } from './reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({ reducer });
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <TaskList />
        <AddTask />
        <ProgressBar />
        <Footer />
      </Provider>
    </>

  )
}
