import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'components/Header'
import { TaskInput } from 'components/TaskInput'
import { TaskList } from 'components/TaskList'

import { tasks } from 'reducers/tasks'

// Store with the todos (hardcoded at first)
// Component TaskInput to create new todos
// Component TaskItem
// Component TaskList to list the todos
// Component Reset to clear list (button)
// Component Header with title, date, task quantity, clearbutton

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskInput />
      <TaskList />
    </Provider>
  )
}
