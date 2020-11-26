import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { AddTodo } from './components/AddTodo'
import { List } from 'components/List'
import { todos } from './reducers/Todos'


const reducer = combineReducers({ todos: todos.reducer})
const store = configureStore({ reducer })

export const App = () => {
  // We can't useDispatch here
  //  or useSelector
  return (
    <Provider store={store}>
      <AddTodo />
      <List />
    </Provider>
  )
}
