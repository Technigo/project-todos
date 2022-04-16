import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { GlobalStyle, TodoListContainer } from 'styles'

import tasks from 'reducers/tasks'

import TaskList from 'components/TaskList'
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <TodoListContainer>
          <h1>PLAN YOUR WEDDING</h1>
          <h3>What do you need to do?</h3>
          <TaskList />
          <AddTask />
        </TodoListContainer>
      </Provider>
    </>
  )
}
