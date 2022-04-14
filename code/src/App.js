import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom' 
import { Link } from "react-router-dom";
import tasks  from './reducers/tasks'
import HomePage from 'HomePage'
import Today from 'Today'
import Projects from 'Projects'
import Completed from 'Completed'
import Uncompleted from 'Uncompleted'
import AllTask from 'AllTask'
import AddTask from 'AddTask'
import styled from 'styled-components';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

const AddTaskBtn = styled(Link)`
    background-color: #707BFB;
    color: white;
    padding: 1.6rem 2.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    border-radius: 10px;

`

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
          <AddTaskBtn to='add-task'>Add a Task</AddTaskBtn>
        </BrowserRouter>

    </Provider>
  )
}
