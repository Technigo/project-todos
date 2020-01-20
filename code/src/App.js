import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { TaskList } from './components/TaskList'
import { AddTaskForm } from './components/AddTask'
import { ClearButton } from 'components/ClearButton'
import { TaskSummary } from 'components/TaskSummary'
import { Header } from 'components/Header'
import styled from 'styled-components'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <AddTaskForm />
        <TaskList />
        <TaskSummary />
        <ClearButton />
      </Wrapper>
    </Provider>
  )
}


const Wrapper = styled.div`
@media (min-width: 768px) {
  width: 500px;
  position: fixed;
  left: 30%;
`
