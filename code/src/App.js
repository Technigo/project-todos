import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Tasks } from 'components/Tasks'
//a reducer required for the store

import { tasks } from 'reducers/tasks'


// This will combine all reducers
const reducer = combineReducers({
  tasks: tasks.reducer,
})

//use the single reducer to create a Store
const store = configureStore({reducer})

export const App = () => {
  
  return (
    // need to wrap everything in provider
  <Provider store={store}>
    Hey hey, we are ready for your tasks
  <Tasks/>

  </Provider>
  
)}
