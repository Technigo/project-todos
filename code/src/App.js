import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import taskitems from 'reducers/taskitems'

import TaskPage from 'components/TaskPage'
import StartPage from 'components/StartPage'
import ErrorPage from 'components/ErrorPage'


const reducer = combineReducers({
  taskitems: taskitems.reducer
})

// Local storage as the initial state
const persistedStateJSON = localStorage.getItem("taskitemsReduxState")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Creating store with initial state
const store = createStore(reducer, persistedState)
// const store = configureStore({ reducer })

// Storing the state in local storage on Redux state change
store.subscribe(() => {
  // localStorage.clear()
  localStorage.setItem("taskitemsReduxState", JSON.stringify(store.getState()))
})

console.log(persistedState)

export const App = () => {

  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/taskpage" element={<TaskPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  )
}
