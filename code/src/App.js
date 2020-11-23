import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

import Header from './components/Header'
import Tasklist from './components/Tasklist'
import { tasks } from 'reducers/tasks'

const reducer = combineReducers({tasks: tasks.reducer})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Tasklist />
    </Provider>
  )
}
