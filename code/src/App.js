import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import StartPage from 'components/StartPage'
import IntroPage from 'components/Intropage'
import tasks from 'reducers/tasks'
import NotFound from 'components/NotFound'


const reducer = combineReducers({
  tasks: tasks.reducer,
})

const store = configureStore({reducer: reducer,})

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