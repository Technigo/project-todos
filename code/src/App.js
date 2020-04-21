import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { notepad } from 'reducers/notepad'
import { TaskSummary } from 'components/TaskSummary'
import { AddTaskForm } from 'components/AddTaskForm'
import { TaskList } from 'components/TaskList'

const reducer = combineReducers({
  notepad: notepad.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskSummary />
      <AddTaskForm />
      <TaskList />
    </Provider>
  )
}
