import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Tasks } from 'components/Tasks'
import { AddTask } from 'components/AddTask'

import { todos } from 'reducers/todos'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <Tasks />
    </Provider>
  )
}
