import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/todos'
import { ToDoLists } from 'components/toDoList';
import { Header } from './components/header'
import { NewToDo } from './components/newToDo'
import { SumToDo } from './components/sumToDo'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  })
  return (
    <div>
      <Provider store={store}>
        <Header />
        <NewToDo />
        <ToDoLists />
        <SumToDo />
      </Provider>
    </div>
  );
}

