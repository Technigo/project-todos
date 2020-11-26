import React from 'react'
import { Provider } from "react-redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"

import { todoTasks } from './reducer/todoTasks'
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"


//--- OLD STORE CODE ---

//creating a single reducer from several reducers
export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  todoTasks: todoTasks.reducer
})

//using the reducer to create a store
// const store = configureStore({ reducer: reducer }) //can also be written as {reducer}

//--- NEW STORE CODE ---
//1. Retrieve the local storage (from the browser?) and use it as our initial state
// store sth over several different sessions; 
//reduxState = what value am I supposed to get from the local storage
const persistedStateJSON = localStorage.getItem("RebekasState")
console.log(`persistedStateJSON: ${persistedStateJSON}`)

let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${persistedState}`)
//2. Create the storage using the initial state
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("RebekasState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    //store is passed to provider as a prop
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  )
}
