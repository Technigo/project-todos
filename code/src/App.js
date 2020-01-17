import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from 'components/Header'
import { TaskInput } from 'components/TaskInput'
import { TaskList } from 'components/TaskList'
import { tasks } from 'reducers/tasks'

// Reducers
const reducer = combineReducers({
  tasks: tasks.reducer
})

// Store 
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoWrapper>
        <Header />
        <TaskInput />
        <TaskList />
      </TodoWrapper>
    </Provider>
  )
}

const TodoWrapper = styled.main`
  @media (min-width: 668px) {
    width: 50%;
    margin: 20px auto;
  }
`
