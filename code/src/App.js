import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoList } from 'components/ToDoList'
import { tasksproject } from 'reducers/tasksproject'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { ProjectToDoList } from 'components/ProjectToDoList'
import { tasks } from './reducers/tasks'

export const Wrapper = styled.div`
  overflow: hidden;
  margin: 0;
`

export const Main = styled.main`
  margin: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width:744px) and (max-width:1280px){
    max-width: 533px;
    margin: 45px auto 20px auto;
  }

  @media (min-width:1280px){
    margin: 40px 20px 20px 20px;
    flex-direction: row;
    justify-content: center;
  }

`

const reducer = combineReducers({
  tasks: tasks.reducer,
  tasksproject: tasksproject.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Provider store={store}>
          <ToDoList />
          <ProjectToDoList />
        </Provider>
      </Main>
    </Wrapper>
  )
}