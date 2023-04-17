import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoList } from 'components/ToDoList'
import { NewToDo } from 'components/NewToDo'
import { newTask } from 'reducers/newTask'
import { tasks } from './reducers/tasks'

const reducer = combineReducers({
  tasks: tasks.reducer,
  newTask: newTask.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <NewToDo />
      <ToDoList />
    </Provider>
  )
}