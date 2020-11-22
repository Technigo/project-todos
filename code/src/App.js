import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { tasks } from 'reducers/tasks'
import TaskList from 'components/TaskList'
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      Find me in src/app.js!
      <AddTask />
      <TaskList />
    </Provider>
  )
}
