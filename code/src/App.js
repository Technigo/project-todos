import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from './reducers/task';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';
import CompletedTask from './components/CompletedTask';

function App() {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
      <CompletedTask />
    </Provider>
  );
}

export default App;
