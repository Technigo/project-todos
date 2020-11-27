import React from 'react'
import  { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { Header } from 'components/Header'

import backgroundImg from 'assets/background.jpg'

const reducer = combineReducers({ tasks: tasks.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
     <Provider store={store}>
       <Header />
      <Wrapper>
      <AddTask />
      <TaskList />
      </Wrapper>
    </Provider>
  
  )
}

const Wrapper = styled.main`
 background-image: url(${backgroundImg});
 background-size: cover;
  width:600px;
  height:800px;
  /* display: flex;

  align-items: center; */
  /* position: relative; */
`
