import React from 'react'
import {Provider} from "react-redux"
import { configureStore, combineReducers} from "@reduxjs/toolkit"
import {fridge}from "reducers/fridge"
import {AddItemForm} from "components/AddItemForm"
import {FridgeSummary} from "components/FridgeSummary"
import { ItemList} from "components/ItemList"
import {ClearButton} from "components/ClearButton"

const reducer = combineReducers ({
 fridge: fridge.reducer
})

const store = configureStore ({reducer})


export const App = () => {
  return (
   <Provider store= {store}>
     <FridgeSummary/>
     <AddItemForm/>
     <ItemList/>
     <ClearButton/>
   </Provider>
  )
}
