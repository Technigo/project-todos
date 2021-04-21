import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasks from './reducers/tasks'
import TaskList from './components/TaskList'
import { Header } from './components/Header'
import styled from 'styled-components'

const Main = styled.main`
  background-color: #dee2e6;
  height: 100vh;
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
        <TaskList />
      </Main>
    </Provider>
  )
}
