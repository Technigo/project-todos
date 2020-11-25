import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {tasks}  from './reducers/tasks'
// import {TasksList} from './components/TasksList'
import {HouseholdTasks} from './components/HouseholdTasks'
import {SelfCare} from './components/SelfCare'
import {CodingTasks} from './components/CodingTasks'
import {Groceries} from './components/Groceries'
import {Other} from './components/Other'
import {TasksInput} from './components/TasksInput'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TasksInput/>
      <HouseholdTasks></HouseholdTasks>
      <SelfCare></SelfCare>
      <CodingTasks></CodingTasks>
      <Groceries></Groceries>
      <Other></Other>
    </Provider>
  )
}