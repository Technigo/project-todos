import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { tasks } from './reducers/tasks'
import { account } from './reducers/account'
import TodoList from './components/TodoList'
import Header from './components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer,
  account: account.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
    </Provider>
  )
}
