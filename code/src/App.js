import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import tasks from './reducers/tasks'
import TaskList from './components/TaskList'
import NewTaskInput from './components/NewTaskInput'
import Header from './components/Header'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

    @media (min-width: 768px) {
      height: 80vh;
      width: 50vw;
    } 
`

const reducer = combineReducers({
  tasks: tasks.reducer
})

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
