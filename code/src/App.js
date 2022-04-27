import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
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

let preloadedState = {};
const persistedStateJSON = localStorage.getItem("reduxState")


if (persistedStateJSON) {
  preloadedState =  JSON.parse(persistedStateJSON)
}

const store = configureStore({reducer, preloadedState} )

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})



export const App = () => {
 

  return (
    <Provider store={store}>
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

        </BrowserRouter>

    </Provider>
  )
}
