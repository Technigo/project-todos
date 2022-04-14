import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/Tasks'

import { Header } from 'components/Header'
import TodoList from 'components/TodoList'
import AddTodo from 'components/AddToDo'


//Creating the pocket (combined all slices)
const reducer = combineReducers({
  tasks: tasks.reducer
})

//The store consist of all reducers which is stored in const reducer
const store = configureStore({
  reducer
})


export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <TodoList/>
      <AddTodo/>
    </Provider>
  )
}
