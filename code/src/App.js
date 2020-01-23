import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Tasks } from './reducers/tasks'

import { Header } from "components/Header"
import { AddNewTask } from "components/AddNewTask"
import { TaskList } from "components/TaskList"



const reducer = combineReducers({
  Tasks: Tasks.reducer
  // todo list (reducers/Tasks.js) 
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <AddNewTask />
        <TaskList />
      </div >
    </Provider>

  )
}
