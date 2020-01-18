import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { TaskList } from 'components/TaskList'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Counter } from 'components/Counter'
import { AddTask } from 'components/AddTask'

import { tasks } from 'reducers/tasks'

import 'components/App.css'



const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div className="app-container">
      <Provider store={store} >
        <Header />
        <AddTask />
        <TaskList />
        <Counter />
        <Footer />
      </Provider>
    </div>
  )
}
