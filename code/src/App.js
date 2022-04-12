import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/Tasks'

import { Header } from 'components/Header'


//Creating the pocket (combined all slices)
const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({
  reducer
})


export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
    </Provider>
  )
}
