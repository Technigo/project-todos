import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


//import components
import AddTodo from './components/AddTodo'

//a reducer required for the store
import todos  from './reducers/todos'
import TodoList from './components/TodoList'
import StarterPage from './components/StarterPage'

// This will combine all reducers, combineReducers is a method which takes an object
const reducer = combineReducers({
  todos: todos.reducer
})

//use the single reducer to create a Store
const store = configureStore({reducer})

export const App = () => {
  
  return (
    // need to wrap everything in provider
  <Provider store={store}>
    <StarterPage />
    Hey hey, we are ready for your tasks
    <AddTodo />
    <TodoList />
  </Provider>
  
)}
