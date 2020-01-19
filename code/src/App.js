import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'
import { TaskSummary } from 'components/TaskSummary'
import { HeaderTodo } from 'components/HeaderTodo'

import styled from 'styled-components/macro'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <HeaderTodo />
        <AddTodo />
        <TodoList />
        <TaskSummary />
      </Container>
    </Provider>
  )
}

const Container = styled.main`
  @media (min-width: 668px) {
    width: 50%;
    margin: 20px auto;
`

