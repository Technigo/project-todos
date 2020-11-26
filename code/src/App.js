import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' // lets components be able to reach the store

import { Header } from './Components/Header'
import { TaskInput } from './Components/TaskInput'
import { TaskList } from './Components/TaskList'
import { TaskSummary } from './Components/TaskSummary'
import { todo } from 'Reducers/todo'
import { ClearButton } from 'Library/ClearButton'

const reducer = combineReducers({ todo: todo.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
  <main>
    <Provider store={store}>
    <Header /> 
    <TaskInput />
    <TaskList />
    <ClearButton />
    </Provider>
  </main>
  )
}