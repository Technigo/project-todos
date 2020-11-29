import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { Header } from 'components/Header'
import { RemoveTasks } from 'components/RemoveTasks'

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
        <RemoveTasks />
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.main`
  background-image: url(${backgroundImg});
  background-size: cover;
  width:600px;
  height:800px;
  margin-top: 40px;
  position: relative; 
`
