import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import tasks from 'reducers/tasks'
import AddTasks from 'components/AddTasks'
import TaskList from 'components/TaskList'
import Header from 'components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer,
})

const store = configureStore({ 
  reducer,
})


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTasks />
      <TaskList />
    </Provider>
  )
}
