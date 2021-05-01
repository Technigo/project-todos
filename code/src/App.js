import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import tasks from './reducers/tasks'
import TaskList from './components/TaskList'
import NewTaskInput from './components/NewTaskInput'
import Header from './components/Header'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 280px;
  justify-content: space-between;
    @media (min-width: 768px) {
      height: 400px;
      width: 280px;
    } 
    @media (min-width: 1200px) {
      width: 250px;
      height: 400px;
    } 
`

const reducer = combineReducers({ tasks: tasks.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <MainContainer>
      <Provider store={store}>
        <Header />
        <TaskList />
        <NewTaskInput />
      </Provider>
    </MainContainer>
  )
}
