import React from 'react'
import  { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import backgroundImg from 'assets/background.jpg'

const reducer = combineReducers({ tasks: tasks.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
     <Provider store={store}>
       
      <Wrapper>
      <Header /> 
      <AddTask />
      <TaskList />
      <Footer />
      </Wrapper>
      
    </Provider> 
  )
}

const Wrapper = styled.main`
 background-image: url(${backgroundImg});
 background-size: cover;
  width:500px;
  height:700px;
  margin-top: 40px;
  /* align-items: center; */ 
  position: relative; 
`
