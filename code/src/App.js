import React from 'react'
// import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { TaskInput } from 'Components/TaskInput'
import { TaskItem } from 'Components/TaskItem'
import { TaskList } from 'Components/TaskList'

import {addtodo} from './Reducers/addtodo'
import {setdone} from './Reducers/setdone'




const reducer = combineReducers({ 
  addtodo: addtodo.reducer,
  setdone: setdone.reducer

})
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
    <main>
     
      <TaskItem />
      <TaskList />
      
      </main>
    </Provider>
  )
}
