import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
// import users from './reducers/users' example if more slices

import { Main } from './components/Main'



const reducer = combineReducers({
  todos: todos.reducer
  //if you have severall slices, you put them here. ex users: users.reducer, messages, etc
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
