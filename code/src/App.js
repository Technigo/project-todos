import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoList } from 'components/ToDoList'
import { tasksproject } from 'reducers/tasksproject'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { ProjectToDoList } from 'components/ProjectToDoList'
import { tasks } from './reducers/tasks'

export const Main = styled.main`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const reducer = combineReducers({
  tasks: tasks.reducer,
  tasksproject: tasksproject.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Main>
      <Header />
      <Provider store={store}>
        <ToDoList />
        <ProjectToDoList />
      </Provider>
    </Main>
  )
}