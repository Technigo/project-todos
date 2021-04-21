import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasks from './reducers/tasks'
import TaskList from './components/TaskList'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import styled from 'styled-components'

const Main = styled.main`
  background-color: #fffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <TaskForm />
        <TaskList />
      </Main>
    </Provider>
  )
}
