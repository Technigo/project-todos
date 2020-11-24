import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {tasks}  from './reducers/tasks'
// import {TasksList} from './components/TasksList'
import {HouseholdTasks} from './components/HouseholdTasks'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <HouseholdTasks></HouseholdTasks>
    </Provider>
  )
}