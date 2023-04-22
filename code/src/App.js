/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { GlobalStyles } from 'StyledComponents/globalStyles';
import tasks from './reducers/tasks'

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AddTask />
        <TaskList />
      </Provider>
    </>
  )
}

