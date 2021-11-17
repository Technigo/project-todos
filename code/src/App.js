import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todos from './reducers/todos'
import TaskList from './pages/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from 'pages/StartPage'

const reducer = combineReducers({
  todos: todos.reducer
})

const preloadedStateJSON = localStorage.getItem('todosReduxState')
let preloadedState = {}

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON) 
}

//configures the store with the slices and the localstate
const store = configureStore({ reducer, preloadedState })

//Store the state in localstorage, when Redux state changes
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/tasks' element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
