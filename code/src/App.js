import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { tasks } from './Reducers/tasks'

import { Home } from './Pages/Home'

const reducer = combineReducers({tasks: tasks.reducer,})
//Here we'll use localstorage to save the current state

const persistedStateJSON = localStorage.getItem('taskState')
let persistedState = {}
if (persistedStateJSON) {
  persistedState=JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)
//window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

store.subscribe(() => {
  localStorage.setItem('taskState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}
