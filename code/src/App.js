import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

//collect all slices and combine to one box. 
const reducer = combineReducers({
  todos: todos.reducer, //specify all slices that we need to combine in this bigger bag
})

const store = configureStore({reducer
})

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
