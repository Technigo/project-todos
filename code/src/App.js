import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'

import { Header } from "components/Header"
import { AddNewTask } from "components/AddNewTask"
import { TaskList } from "components/TaskList"



const reducer = combineReducers({
  tasks: tasks.reducer
  // todo list (reducers/Tasks.js) 
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="contanier">
        <Header />
        <AddNewTask />
        <TaskList />
      </div >
    </Provider>

  )
}
