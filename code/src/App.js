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

const store = configureStore({ reducer })

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
