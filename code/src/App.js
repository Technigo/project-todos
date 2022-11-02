import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toDos from 'reducers/toDos';
import ToDoList from 'components/ToDoList'
import NewToDoItem from 'components/NewToDoItem';
import Calendar from 'components/Calendar';
import Header from 'components/Header';
import TotalTasks from 'components/TotalTasks';

export const App = () => {
  const reducer = combineReducers({
    toDos: toDos.reducer
  });
  const store = configureStore({
    // reducer: reducer
    reducer
  });
  return (
    <Provider store={store}>
      <Header />
      <TotalTasks />
      <NewToDoItem />
      <Calendar />
      <ToDoList />
    </Provider>
  );
}
