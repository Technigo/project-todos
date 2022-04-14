import React from 'react';
import { Provider} from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import { tasks } from 'reducers/tasks';
import { Header} from 'components/Header'
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';
import { TaskCounter } from 'components/TaskCounter';


const reducer= combineReducers({
 tasks: tasks.reducer,
 // här kan det vara en till slice
})

const store= configureStore({
  reducer: reducer
})

const GlobalStyle=createGlobalStyle`
body{
  color: black;
  background: linear-gradient(70deg, #f7f377  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #a8e6c3 60%, #f39adf 60%);
  background-repeat: no-repeat;
  background-size: cover;
  height:100vh;
  font-family: 'Oswald', sans-serif;
  
}
`



export const App = () => {
  return (
    //store heter alltid store
 
 <Provider store={store}> 
 <GlobalStyle/>
 <Header/>
 <div className="rapper">
  <TaskCounter/>
  <AddTask/>
   <TaskList/>
 </div>
  </Provider> 
 
  )
}
