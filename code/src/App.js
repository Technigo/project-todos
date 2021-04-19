import React from 'react';
import { Provider } from 'react-redux';
import {combineReducers, configureStore } from '@reduxjs/toolkit'

import { tasks } from './reducers/tasks';
import { TaskList } from 'components/TaskList';
import { AddTodoForm } from 'components/AddTodo';
import { AllTodos } from './components/AllTodos';

const reducer = combineReducers({
  tasks:tasks.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <AllTodos />
      <AddTodoForm />
      <TaskList />
    </Provider>
  )
}
