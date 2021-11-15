import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


// combining all the reducers (here we have only one) this is always called reducer and combineReducer, inside we specidly all of the slices that we need to combine!
const reducer = combineReducers({
  todos: todos.reducer,
})

// This is always made like this!! It is a build in name, you can also write  { reducer } onlyn when it is the same word xx: xx!
const store = configureStore({ reducer: reducer})


export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
