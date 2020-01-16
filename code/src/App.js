import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { ToDoList } from 'components/ToDoList'
import { AddTask } from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="body">
        <ToDoList />
        <AddTask />
      </div>
    </Provider>
  )
}
