import React from 'react'
import {Provider, createStore} from "react-redux"
import { configureStore, combineReducers} from "@reduxjs/toolkit"
import {toDos}from "reducers/postReducer"
import {toDoList} from "components/toDoList"

const reducer = combineReducers ({
 toDos: toDos.reducer
})

const store = configureStore ({reducer})


export const App = () => {
  return (
   <Provider store= {store}>
     <div>HEEYY</div>
    <toDoList/>
   </Provider>
  )
}
