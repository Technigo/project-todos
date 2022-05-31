import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import taskitems from 'reducers/taskitems'
import TaskPage from 'pages/TaskPage'
import StartPage from 'pages/StartPage'
import ErrorPage from 'pages/ErrorPage'


const reducer = combineReducers({
  taskitems: taskitems.reducer
})

const persistedStateJSON = localStorage.getItem("taskitemsReduxState")
let preloadedState = {}

if (persistedStateJSON) {
  preloadedState = JSON.parse(persistedStateJSON)
}

const store = configureStore({reducer, preloadedState})

store.subscribe(() => {
  localStorage.setItem("taskitemsReduxState", JSON.stringify(store.getState()))
})


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
