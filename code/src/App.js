import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import StartPage from 'components/StartPage'
import IntroPage from 'components/Intropage'
import tasks from 'reducers/tasks'
import NotFound from 'components/NotFound'


const reducer = combineReducers({
  tasks: tasks.reducer,
})

// Local storage
let persistedState = {}
const persistedStateJSON = localStorage.getItem("reduxState")

if (persistedStateJSON) {
  persistedState =  JSON.parse(persistedStateJSON)
}

const store = createStore (reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/app" element={<StartPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
   </Provider>
  )}