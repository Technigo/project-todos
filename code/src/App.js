import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers, createStore} from "@reduxjs/toolkit"
import { ToDo}from "reducers/toDo"
import { AddItemForm } from "components/AddItemForm"
import { ToDoSummary } from "components/ToDoSummary"
import { ItemList } from "components/ItemList"
import { ClearButton } from "components/ClearButton"
import { CustomCheckbox } from "components/CustomCheckbox"




const reducer = combineReducers({
  ToDo: ToDo.reducer,
});

const persistedStateJSON = localStorage.getItem("rememberReduxState")
let persistedState={}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem("rememberReduxState", JSON.stringify(store.getState()))
})

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
