// Username to global state?

import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import taskitems from 'reducers.js/taskitems'

import TaskPage from 'components.js/TaskPage'
import StartPage from 'components.js/StartPage'
import ErrorPage from 'components.js/ErrorPage'


const reducer = combineReducers({
  taskitems: taskitems.reducer
})

// Local storage as the initial state
const persistedStateJSON = localStorage.getItem("taskitemsReduxState")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Creating store with initial state "appState" "taskitemsReduxState"
const store = createStore(reducer, persistedState)
// const store = configureStore({ reducer })

// Storing the state in local storage on Redux state change
store.subscribe(() => {
  // localStorage.clear()
  localStorage.setItem("taskitemsReduxState", JSON.stringify(store.getState()))
})

console.log(persistedState)

export const App = () => {
  const [nameInput, setNameInput] = useState("")

  const onNameInputChange = (event) => {
      setNameInput(event.target.value)
  }

  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage nameInput={nameInput} onNameInputChange={onNameInputChange} />} />
            <Route path="/taskpage" element={<TaskPage nameInput={nameInput} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  )
}
