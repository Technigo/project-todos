import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'

import Form from 'components/Form'
import TaskList from 'components/TaskList'
import Header from 'components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Form />
      <TaskList />
    </Provider>
  )
}
