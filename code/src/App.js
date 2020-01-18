import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' 
import { ToDoList } from 'reducers/todolist'

import { AddTask } from 'components/AddTask'
import { TaskList } from 'components/TaskList'


const reducer = combineReducers({
  toDoList: ToDoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h1>HEY HO</h1>
      <AddTask />
      <TaskList />
    </Provider>
  )
}
