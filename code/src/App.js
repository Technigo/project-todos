import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { tasks } from './reducers/tasks'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'
import { CheckboxStyled } from './components/CheckboxStyled'


const reducer = combineReducers ({
  tasks: tasks.reducer
})

const store = configureStore ({ reducer })

export const App = () => {
  return (
    <Provider store= {store}>
      {/* <Header /> 
      <AddTask />
      <TaskList /> */}
      <CheckboxStyled /> 
    </Provider>
  )
}

