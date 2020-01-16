import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { tasks } from './reducers/tasks'

import { Head } from './components/Head'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore( { reducer } )

export const App = () => {
  return (
    <div className="main-container">
      <Provider store={store}>
        <Head />
        <AddTask />
        <TaskList />
      </Provider>
    </div>
  )
}
