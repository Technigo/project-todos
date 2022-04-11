import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksList from 'components/TaskList'
import pokemons from 'reducers/pokemons.js'
import IntroPage from 'components/Intropage.js'

const reducer = combineReducers({
  pokemons: pokemons.reducer,
})

const store = configureStore({
reducer: reducer,
})

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/app" element={<TasksList />} />
      </Routes>
      </BrowserRouter>
   </Provider>
  )}