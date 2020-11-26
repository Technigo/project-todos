import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers,createStore } from '@reduxjs/toolkit'

import {tasks}  from './reducers/tasks'
import {Header} from './components/Header'
import {ItemAdded} from './components/ItemAdded'
import { ItemList } from 'components/ItemList'
import {ItemRemoved} from './components/ItemRemoved'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const persistedState = localStorage.getItem("reduxState") 
? JSON.parse(localStorage.getItem("reduxState"))
: {}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem("reduxState",
  JSON.stringify(store.getState()))
  })
  
export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <ItemList/>
      <ItemAdded/>
      <ItemRemoved/>
    </Provider>
  )
}

//reference for persisted state in Redux: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e