import React from 'react'
import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { todos } from './Reducers/todos'
import { TodoList } from './Components/TodoList'
import { CreateNewTask } from './Components/CreateNewTask'
import { Header } from './Components/Header'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Header />
      <CreateNewTask />
      <TodoList />
    </Provider>
  )
}
