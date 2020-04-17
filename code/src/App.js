import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { AddingTodo } from 'components/AddingTodo'
import { todos } from 'reducers/todos'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AddingTodo />
      </Provider>
    </div>
  )
}
