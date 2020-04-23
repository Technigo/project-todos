import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { shopping } from 'reducers/shopping'
import { Header } from 'components/Header'
import { ToDoList } from 'components/ToDoList'
import { CustomCheckBox } from 'components/CustomCheckBox'

const reducer = combineReducers({
  tasks: tasks.reducer,
  shopping: shopping.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store ={store}>
      <Header />
      <ToDoList /> 
    </Provider>
  )
}
