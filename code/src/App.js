import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {todos} from 'reducers/todos'

import { Header } from 'components/Header'
import { List } from 'components/List'
import { AddItem } from 'components/AddItem'
import { Summary } from 'components/Summary'
 
const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    //we cant use dispatch here or useselector 
   <Provider store={store}>
     <Header></Header>
     <List></List>
     <AddItem></AddItem>
   </Provider>
  )
}
