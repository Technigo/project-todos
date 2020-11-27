import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' // lets components be able to reach the store

import { Header } from './Components/Header'
import { TaskInput } from './Components/TaskInput'
import { TaskList } from './Components/TaskList'
import { todo } from 'Reducers/todo'
import { ClearButton } from 'Library/ClearButton'

// These two lines of code is if I want to remove the local storage 
//const reducer = combineReducers({ todo: todo.reducer })
//const store = configureStore({ reducer })

// This code keeps the new tasks in the list
const reducer = combineReducers({ todo: todo.reducer, })
const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
const store = configureStore({
  reducer,
  preloadedState: persistedState
})
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
  <main>
    <Provider store={store}>
    <Header /> 
    <TaskInput />
    <TaskList />
    <ClearButton />
    </Provider>
  </main>
  )
}