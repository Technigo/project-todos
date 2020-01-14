import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TaskList } from 'components/TaskList'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Counter } from 'components/Counter'

import { tasks } from 'reducers/tasks'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskList />
      <Counter />
      <Footer />
    </Provider>
  )
}
