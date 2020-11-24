import React from 'react'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' // lets components be able to reach the stre
import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'
import { todo } from 'Reducers/todo'



//const store = configreStore({ reducer })
const reducer = combineReducers({ todo: todo.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
  <main>
     
    <Provider store={store}>
    <Header /> 
    <TaskList />
    </Provider>
  </main>
  )
}
