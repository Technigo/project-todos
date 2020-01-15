import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { tasks } from './reducers/tasks'
import { addNewTask } from './reducers/addNewTask'


import { TaskLists } from './components/TaskLists'


const reducer = combineReducers({
  tasks: tasks.reducer,
  addNewTask: addNewTask
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskLists />
    </Provider>
  )
}
