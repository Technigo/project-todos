import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'
import { Header } from "components/Header"
import { AddNewTask } from "components/AddNewTask"



const reducer = combineReducers({
  tasks: tasks.reducer
  // todo list (reducers/Tasks.js) 
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <AddNewTask />
      </div >
    </Provider>

  )
}
