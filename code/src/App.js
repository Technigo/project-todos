import React from 'react'
// import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, configureStore } from '@reduxjs/toolkit'

import { TaskList } from 'Components/TaskList'

import {todos} from './Reducers/todos'


const reducer = combineReducers({ 
  todos: todos.reducer
})
 
const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
    <main>
      <TaskList />
    </main>
    </Provider>
  )
}
