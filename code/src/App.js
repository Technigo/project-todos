import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import {tasks}  from './reducers/tasks'
import {Header} from './components/Header'
import {ItemAdded} from './components/ItemAdded'
import { ItemList } from 'components/ItemList'
import {ItemRemoved} from './components/ItemRemoved'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const persistedState = localStorage()

const store = createStore(reducer, persistedState)

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