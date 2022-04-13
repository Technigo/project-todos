import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Link } from "react-router-dom";

import tasks  from './reducers/tasks'
import HomePage from 'HomePage'
import Today from 'Today'
import Projects from 'Projects'
import Completed from 'Completed'
import Uncompleted from 'Uncompleted'
import AllTask from 'AllTask'
import AddTask from 'AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <HomePage />  } />
            <Route path='today-task' element= { <Today /> } />
            <Route path='projects' element= { <Projects /> } />
            <Route path='complete' element= { <Completed /> } />
            <Route path='uncomplete' element= { <Uncompleted /> } />
            <Route path='all' element= { <AllTask /> } />
            <Route path='add-task' element={ <AddTask /> } />
          </Routes>
          <Link to='add-task'>Add a Task</Link>
        </BrowserRouter>

      </div>
    </Provider>
  )
}
