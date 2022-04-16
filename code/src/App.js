import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/tasks'
import AddTask from 'components/AddTask'


//prepare pocket
const reducer = combineReducers({
  tasks: tasks.reducer,
})

//injected pocket into backpack
const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    //put backpack on the persons shoulder 
    //all here in between has access to global store
    <Provider store={store}>
      <AddTask/>
    </Provider>
  )
}
