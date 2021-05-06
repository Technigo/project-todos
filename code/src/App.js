import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import TodoApp from 'components/TodoApp'
import todos from './reducers/todos'



const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
