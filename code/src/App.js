import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'components/Header'
import { TaskInput } from 'components/TaskInput'
import { TaskList } from 'components/TaskList'

import { tasks } from 'reducers/tasks'

// Store with the tasks (hardcoded at first)
// Reducer for the tasks
// Reducer to count quantity of completed and not completed tasks
// Component TaskInput to create new todos
// Component TaskItem for the tasks
// Component TaskList to list the tasks
// Component Reset to clear list (button)
// Component Header with title, date, completed tasks/task quantity, clearbutton

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
