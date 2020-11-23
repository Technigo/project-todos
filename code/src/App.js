import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { tasks } from './Reducers/tasks'

import { List } from './Components/List'

const reducer = combineReducers({tasks: tasks.reducer,})
//Here we'll use localstorage to save the current state
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <List/>
    </Provider>
  )
}
