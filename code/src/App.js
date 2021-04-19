import React from 'react'
import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { todos } from './Reducers/todos'
import { TodoList } from './Components/TodoList'
import { CreateTodo } from './Components/CreateTodo'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <CreateTodo />
      <TodoList />
    </Provider>
  )
}
