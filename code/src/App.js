import React from 'react'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'

import { tasks } from 'reducers/Tasks'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask'

import 'App.css'

// set up reducers combineReducers
const reducer = combineReducers({
  tasks: tasks.reducer
})


// local storage
// 1. retrieve local storage and use it as initial state

const persistentStateJSON = localStorage.getItem('reduxState-1')
let persistentState = {}

if (persistentStateJSON) {
  persistentState = JSON.parse(persistentStateJSON)
}

// // 2. Create the store using the initial state
const store = createStore(reducer, persistentState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// // 3. Store the state in local storage at ANY redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState-1', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskList />
      <AddTask />
  </Provider>
  )
}
