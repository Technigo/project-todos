import React from 'react'
import { Provider } from 'react-redux'


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {todos} from 'reducer/todos'

import {TaskList} from './component/TaskList'
import { TaskForm } from 'component/TaskForm'

const reducer = combineReducers({todos: todos.reducer})
const store = configureStore({reducer})

export const App = () => {
  return (
    // We can't useDispatch here or useSelector
    <Provider store={store}>
      <TaskForm />
      <TaskList />
    </Provider>
  )
}
