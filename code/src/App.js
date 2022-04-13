import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import tasks from 'reducers/tasks'
import StartPage from 'components/StartsPage'
import Main from 'components/Main'
import NotFound from 'components/NotFound'


const reducer = combineReducers({
  tasks: tasks.reducer,
})

const store = configureStore({ 
  reducer,
})


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
