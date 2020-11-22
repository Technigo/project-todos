import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { TodoSummary } from 'components/TodoSummary'
import { AddTodoForm } from 'components/AddTodoForm'
import { TodoList } from 'components/TodoList'
// import components here later!

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}> 
    <div>
      <TodoSummary />
      <AddTodoForm />
      <TodoList />
    </div>
    </Provider>
  )
}
