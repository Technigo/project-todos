import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TodoList } from 'pages/TodoList'
import { tasks } from 'reducers/tasks'
import { shopping } from 'reducers/shopping'

const reducer = combineReducers({
  tasks: tasks.reducer,
  shopping: shopping.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store ={store}>
      <TodoList />
    </Provider>
  )
}
