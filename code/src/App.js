import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { todoList } from 'reducers/todoList'

import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { Header } from 'components/Header'
import { EmptyListState } from 'components/EmptyListState'

import "index.css"

// Combine reducers
const reducer = combineReducers({
  todoList: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <EmptyListState />
      <TaskList />
    </Provider>
  )
}
