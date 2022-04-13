import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import tasks from 'reducers/tasks'


import Navbar from 'components/Navbar'
import Header from 'components/Header'
import DoneTasks from 'components/DoneTasks'
import NotDoneTasks from 'components/NotDoneTasks'

const reducer = combineReducers({
  tasks: tasks.reducer,
  //userDetails: userDetails.reducer
})

const store = configureStore({
  reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<NotDoneTasks />}/>
        <Route path='/navbar' element={<Navbar />} />
        {/* <Route path='/notdonetasks' element={<NotDoneTasks />} /> */}
        <Route path='/donetasks' element={<DoneTasks />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}
