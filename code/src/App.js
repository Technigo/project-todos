import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/tasks'
import AddTask from 'components/AddTask'
// import userDetails

import TaskList from 'components/TaskList'
import DoneTasks from 'components/DoneTasks'

const reducer = combineReducers({
  tasks: tasks.reducer,
  //userDetails: userDetails.reducer
})

const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
      <AddTask />
      <DoneTasks />
    </Provider>
  )
}
