import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos.js'
import { TaskInput } from './components/TaskInput.js'
import { TaskList } from './components/TaskList.js'
import { TaskCount } from './components/TaskCount.js'

const reducer = combineReducers({
  todos: todos.reducer
  // here we would have put our other reudcers if we would have had more than one
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskInput />
      <TaskList />
      <TaskCount />
    </Provider>
  )
}
