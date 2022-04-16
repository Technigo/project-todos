import React from 'react'
import moment from "moment";

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

  const date = moment().format("dddd MMMM Do YYYY");

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <TodoListContainer>
          <p className="date">{date}</p>
          <h1>PLAN YOUR WEDDING</h1>
          <h3>What do you need to do?</h3>
          <TaskList />
          <AddTask />
        </TodoListContainer>
      </Provider>
    </>
  )
}
