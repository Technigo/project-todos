import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AddToDo from 'components/AddToDo'
import ToDoList from 'components/ToDoList'
import { tasks } from './reducers/tasks'

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <AddToDo />
      <ToDoList />
    </Provider>
  )
}
