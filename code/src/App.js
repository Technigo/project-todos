import React from 'react'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'

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

// a store with the reducer(s)
// const store  = configureStore({ reducer })

// local storage
// 1. retrieve local storage and use it as initial state

const persistentStateJSON = localStorage.getItem('reduxState')
console.log(`persistentStateJSON: ${persistentStateJSON}`)
let persistentState = {}

if (persistentStateJSON) {
  persistentState = JSON.parse(persistentStateJSON)
}
console.log(`persistentState: ${persistentState}`)

// // 2. Create the store using the initial state
const store = createStore(reducer, persistentState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// // 3. Store the state in local storage at ANY redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
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
