/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TaskList from 'components/TaskList'
import { Header } from 'components/Header'
import { tasks } from 'reducers/tasks'

/* const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer }) */

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <section className="outer-wrapper">
        <Header />
        <TaskList />
      </section>
    </Provider>
  )
}

