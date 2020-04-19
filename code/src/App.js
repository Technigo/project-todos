import React from 'react'
import {Provider} from "react-redux"
import { configureStore, combineReducers} from "@reduxjs/toolkit"
import {ToDo}from "reducers/ToDo"
import {AddItemForm} from "components/AddItemForm"
import {ToDoSummary} from "components/ToDoSummary"
import { ItemList} from "components/ItemList"
import {ClearButton} from "components/ClearButton"

const reducer = combineReducers ({
 ToDo: ToDo.reducer
})

const store = configureStore ({reducer})


export const App = () => {
  return (
   <Provider store= {store}>
    
     <AddItemForm/>
     <ItemList/>
     <ClearButton/>
     <ToDoSummary/>
   </Provider>
  )
}
