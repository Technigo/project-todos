import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ToDoList } from './Components/ToDoList'
import { todoitem } from './Components/Reducers/todoitem'

const reducer = combineReducers({
  todoitem: todoitem.reducer,
})

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      < ToDoList />
    </Provider>
  )
}
