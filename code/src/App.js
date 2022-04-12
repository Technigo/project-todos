import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import tasks from 'reducers/tasks'
import Main from 'components/Main'
import CompletedTasks from 'components/CompletedTasks'
import Incomplete from 'components/Incomplete'


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
          <Route path="/" element={<Main />}/>
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/incomplete" element={<Incomplete />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
